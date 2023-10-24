# Fati Messaging Platform

## Project Overview
**Fati** is a versatile messaging platform designed to facilitate communication between users and external contacts. Messages, notes, and images are sent via email, ensuring the privacy and choice of the sender. The platform emphasizes simplicity, user-friendliness, and user control. Senders can choose to remain anonymous, and recipients have the option to create accounts to save messages.

## Key Features

### User Accounts
- Users can create accounts using their email addresses.
- Email verification is required to activate user accounts.
- Users have control over their profile information and email preferences.

### Messaging
- Users can send messages, notes, and images to both registered platform users and external contacts.
- Messages are sent via email, preserving sender anonymity.
- Recipients have the option to create accounts to save messages.

### Notifications
- Users receive notifications for sent messages and other relevant updates.
- Notifications include delivery status, read receipts, and other message-related activities within the platform.

### External Contacts
- Users can send messages to individuals who may not be registered on the platform.
- Messages to external contacts are sent via email, containing a link to view the message on the website.

### User Privacy
- Users have control over their profile information, email preferences, and the option to remain anonymous.
- User data is protected and complies with data protection regulations.

## Technology Stack
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (via Prisma)
- **Frontend**: [Frontend framework of your choice]
- **Real-Time Communication**: Email (for message delivery)
- **Security**: Secure practices for user data and authentication
- **Hosting**: [Hosting platform of your choice]

## Data Models
- User model (with user information, email verification, and email preferences)
- Message model (for messages, notes, images, and anonymous senders)
- Image model (for images in messages)
- Notification model (for user notifications)
- Privacy model (for user privacy settings)
- Session model (optional, for user sessions)
- Token model (optional, for refresh tokens)

## Project Scope
- Develop the web application, user authentication, and messaging functionality.
- Implement the option for senders to remain anonymous and recipients to create accounts to save messages.
- Messages are sent via email to protect sender privacy.

## Compliance
- Adhere to data protection and privacy regulations relevant to user data handling.

## User Experience
- Prioritize a user-friendly and intuitive user interface for a seamless email-based messaging experience.

## Testing and Deployment
- Conduct rigorous testing to ensure email delivery reliability and a smooth user experience.
- Deploy the application on a reliable hosting platform.

## Documentation
- Provide comprehensive documentation, including setup instructions and user guides.

## Future Enhancements
- Future enhancements may include mobile app development, additional email-based features, and user feedback integration.
- Enhanced security features, moderation tools, and user reporting functionality may also be considered.

## Support and Maintenance
- Ongoing support and maintenance are necessary for bug fixing, updates, and user assistance.
