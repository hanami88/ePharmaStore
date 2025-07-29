# 💊 Online Pharmacy - Pharmacity Clone

## 📌 Project Overview

This is a self-built online pharmacy project inspired by Pharmacity. The system allows users to browse products, manage their cart, place orders, and track order status. Admins can manage users, products, and view statistics.  
It was developed individually as a personal project to demonstrate full-stack web development skills.

---

## 🛠️ Technologies Used

### 👨‍💻 Frontend

- HTML5  
- CSS3
- SCSS
- JavaScript (ES6+)  
- Handlebars (template engine)

### ⚙️ Backend

- Node.js  
- Express.js  
- MongoDB (with Mongoose)

### 🔐 Authentication & Authorization

- JSON Web Token (JWT)  
- Cookie-based session handling

### 📦 Session & State Management

- express-session  
- connect-mongo  
- HTTP Cookies

---

## 🚀 Key Features

- ✅ User registration & login with JWT stored in HTTP cookies  
- ✅ Role-based access: Admin / Customer  
- ✅ Shopping cart, order creation, address selection  
- ✅ Admin dashboard for managing users, products, and orders  
- ✅ Monthly revenue and top-selling product charts (Chart.js)  
- ✅ Search/filter orders by phone number or order date

---

## 👤 Developed By

**Mai Anh Luân**  
🔗 GitHub: [https://github.com/hanami88](https://github.com/hanami88)

> 🧑‍💻 Solo project: All frontend, backend, database, and authentication features were built by myself.

---
## 🖼️ User Interface Preview
### 🏠 Home Page
<img width="1440" height="812" alt="Ảnh màn hình 2025-07-29 lúc 10 39 33" src="https://github.com/user-attachments/assets/6c974d8c-786f-4f7e-afae-9580611a1a1f" />
<img width="1440" height="813" alt="Ảnh màn hình 2025-07-29 lúc 10 39 48" src="https://github.com/user-attachments/assets/ea2c58e0-42b3-45b1-8bbb-8b39a4877856" />
<img width="1440" height="813" alt="Ảnh màn hình 2025-07-29 lúc 10 39 58" src="https://github.com/user-attachments/assets/73cd6fec-4d27-4bd2-9a19-aa6f3f398b59" />
<img width="1440" height="814" alt="Ảnh màn hình 2025-07-29 lúc 10 40 32" src="https://github.com/user-attachments/assets/71f62fba-ed4f-47eb-96fa-0a252149b4ab" />
<img width="1440" height="812" alt="Ảnh màn hình 2025-07-29 lúc 10 40 56" src="https://github.com/user-attachments/assets/56f633dd-4e1c-4158-b867-20f4bdb94450" />
<img width="1440" height="900" alt="Ảnh màn hình 2025-07-29 lúc 10 41 04" src="https://github.com/user-attachments/assets/9a3710a9-f380-459a-bc8d-512411d9fb09" />
<img width="1440" height="814" alt="Ảnh màn hình 2025-07-29 lúc 10 41 34" src="https://github.com/user-attachments/assets/5904f9a9-33ce-441c-ab43-b5cc660b59ba" />
### 🔐 Login Page
<img width="1440" height="814" alt="Ảnh màn hình 2025-07-29 lúc 10 46 50" src="https://github.com/user-attachments/assets/846461d3-5e5c-4304-8b66-3ab7b6324058" />
### 📝 Registration Page
<img width="1440" height="812" alt="Ảnh màn hình 2025-07-29 lúc 10 48 00" src="https://github.com/user-attachments/assets/23410c36-cc20-48e9-a8ca-9cf4f93c36c0" />
### 👤 After Login - Customer View
<img width="1440" height="814" alt="Ảnh màn hình 2025-07-29 lúc 10 49 15" src="https://github.com/user-attachments/assets/6fea5f10-03c2-4337-afc5-4b99d4a8754c" />
<img width="1440" height="814" alt="Ảnh màn hình 2025-07-29 lúc 10 53 56" src="https://github.com/user-attachments/assets/c54dd594-d125-4974-9dab-0c4b519bea7c" />
### 🙍‍♂️ User Profile Management

After logging in, users can access their profile to update personal information:

- View current phone number
- Add or change name and email
- Change password
- Save and persist data to MongoDB

Below is the interface for updating user profile:
<img width="1440" height="813" alt="Ảnh màn hình 2025-07-29 lúc 11 54 51" src="https://github.com/user-attachments/assets/8ab0f083-bfee-4081-9f3c-a271c57f53dd" />
### 🙍‍♂️ Update Profile
<img width="1440" height="900" alt="Ảnh màn hình 2025-07-29 lúc 11 58 33" src="https://github.com/user-attachments/assets/de35d113-e214-478a-ac14-9e125cac3680" />
### 📧 Change Email Address
<img width="1440" height="693" alt="Ảnh màn hình 2025-07-29 lúc 12 00 25" src="https://github.com/user-attachments/assets/fdb99744-a42b-475e-b549-b518d816b370" />

### 🔒 Change Password
<img width="1439" height="692" alt="Ảnh màn hình 2025-07-29 lúc 12 00 38" src="https://github.com/user-attachments/assets/9e4aff71-7c6b-4be2-85bc-960fa5cebbd7" />

## 🏠 Shipping Address Management

Users can manage their shipping addresses to ensure accurate delivery. Each user can add, update, or select from multiple saved addresses.

- If no address exists, the user is prompted to add one.
- Users can save multiple addresses (home, office, etc.)
- One address can be marked as the default or currently selected.
- The selected address will be used during the checkout process.

### ➕ Add New Address
<img width="1440" height="811" alt="Ảnh màn hình 2025-07-29 lúc 12 01 31" src="https://github.com/user-attachments/assets/37e29d70-2abb-4472-a1f7-abd2bfa21378" />

### 📭 No Address Available
If the user has no address yet, a message is shown:
> "You have not added any shipping address yet."

<img width="1437" height="691" alt="Ảnh màn hình 2025-07-29 lúc 12 01 20" src="https://github.com/user-attachments/assets/c88f7959-82f9-4627-a6d1-30c9f6184b00" />

### 📋 Saved Address List
After addresses are added, they are listed with options to:
- Select as active
- Edit
- Delete

<img width="1440" height="813" alt="Ảnh màn hình 2025-07-29 lúc 12 02 09" src="https://github.com/user-attachments/assets/b6c5391e-1a1e-46f3-81b9-3afd5818a862" />




