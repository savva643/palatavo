'use strict';

module.exports = {
  async create(ctx) {
    try {
      const { name, email, subject, message, consent } = ctx.request.body;

      // Validate required fields
      if (!name || !email || !subject || !message || !consent) {
        return ctx.badRequest('All fields are required including consent');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return ctx.badRequest('Invalid email format');
      }

      // Validate consent
      if (consent !== true) {
        return ctx.badRequest('Consent to personal data processing is required');
      }

      // Send email
      await strapi.plugins['email'].services.email.send({
        to: strapi.config.get('plugins.email.settings.defaultFrom'),
        subject: `Новое сообщение из формы обратной связи: ${subject}`,
        html: `
          <h2>Новое сообщение из формы обратной связи</h2>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Тема:</strong> ${subject}</p>
          <p><strong>Сообщение:</strong></p>
          <p>${message}</p>
          <p><small>Отправлено: ${new Date().toLocaleString('ru-RU')}</small></p>
        `,
      });

      return ctx.send({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Feedback error:', error);
      return ctx.internalServerError('Failed to send message');
    }
  },
};
