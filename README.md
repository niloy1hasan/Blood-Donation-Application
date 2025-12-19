# BloodBank

## Project Overview
BloodBank is a user-friendly Blood Donation Application built with the **MERN stack (MongoDB, Express.js, React, Node.js)**. The platform connects blood donors with recipients, facilitating seamless blood donation requests, donor management, and role-based access control. The application ensures efficient, secure, and organized management of blood donation activities for admins, donors, and volunteers.

## Key Features

### User Roles & Permissions
- **Admin**
  - Full access to all features: manage users, donation requests, and content.
  - View statistics on total users, funds, and donation requests.
- **Donor**
  - Register and manage own profile.
  - Create, edit, view, and delete donation requests.
  - Track donation request statuses: pending, in-progress, done, canceled.
- **Volunteer**
  - Create and manage donation requests.
  - Update donation statuses.
  - Limited privileges compared to admin.

### Authentication
- **Registration:** Collects email, name, avatar, blood group, district, upazila, and password. Default role is Donor.
- **Login:** Email and password authentication.
- Role-based access ensures secure access to private routes.

### Dashboard Features
- **Donor Dashboard**
  - View profile and edit personal information.
  - View 3 most recent donation requests.
  - Manage all personal donation requests with pagination and filtering.
  - Create new donation requests.
- **Admin Dashboard**
  - Manage all users (block/unblock, assign roles).
  - Manage all donation requests (view, edit, delete, status updates).
  - View dashboard statistics: total users, total funds, total donation requests.
- **Volunteer Dashboard**
  - View all donation requests.
  - Update donation request statuses only.

### Public Pages
- **Home Page**
  - Navbar with dynamic links based on login status.
  - Banner with "Join as a Donor" and "Search Donors" buttons.
  - Featured and contact sections.
- **Search Page**
  - Search donors by blood group, district, and upazila.
- **Blood Donation Requests Page**
  - View all pending donation requests.
- **Donation Request Details Page**
  - Private page with full details and option to donate.

### Donation Management
- Create donation requests with recipient information, hospital, address, blood group, date, and time.
- Track donation request status: pending → in-progress → done/canceled.
- Admin and volunteers can manage donation requests with appropriate privileges.

### Funding Page (Challenge Feature)
- Users can donate funds via integrated Stripe payment.
- Admin and volunteer dashboards display total funds.

### Security & Technical Features
- JWT-based authentication for private APIs.
- Environment variables used for MongoDB and Firebase configurations.
- Fully responsive UI and dashboard for all devices.
- Pagination and filtering implemented where necessary.

### Optional Enhancements
- Animations using Framer Motion or AOS.
- Export search results as PDF.
- Visual charts for daily, weekly, monthly donation requests in admin dashboard.

## Technologies Used
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication & Security:** JWT, Firebase
- **Payment Integration:** Stripe (for funding)