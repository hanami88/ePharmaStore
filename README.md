# 💊 ePharmaStore

## 📌 Project Overviewß

This project is an online pharmacy platform inspired by Pharmacity, designed to make access to essential medicines and healthcare products easier and more convenient. It enables users to quickly search and order medications, manage prescriptions, and track their orders in real time. For administrators, the system provides tools to ensure product quality, manage inventory, and monitor sales, helping to maintain reliable healthcare distribution.
 
- ⏱️ Duration: 1 month (from planning to deployment)

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
<img width="1426" height="813" alt="image" src="https://github.com/user-attachments/assets/1be0fe32-0d01-40ff-91ea-2def55e13cd8" />
<img width="1425" height="812" alt="image" src="https://github.com/user-attachments/assets/9bbfb470-b014-417b-8a0d-aac44e1562a6" />
<img width="1424" height="734" alt="image" src="https://github.com/user-attachments/assets/2343f7b5-243c-47b8-8d40-159a3a44a70a" />
<img width="1424" height="812" alt="image" src="https://github.com/user-attachments/assets/5013b95f-e775-49f6-a030-40fb6265245b" />
<img width="1426" height="813" alt="image" src="https://github.com/user-attachments/assets/2a15b9c0-a9e1-43db-8854-22e65412afc0" />
<img width="1425" height="378" alt="image" src="https://github.com/user-attachments/assets/292a8705-a64e-4f68-bd60-4b7cfda3c58a" />
<img width="1426" height="684" alt="image" src="https://github.com/user-attachments/assets/f16835f7-a206-470f-ac27-352c44d26c72" />
<img width="1426" height="551" alt="image" src="https://github.com/user-attachments/assets/0c48f0b9-78f0-4a9d-bdc6-853653fe984f" />

### 🔐 Login Page

<img width="1440" height="813" alt="image" src="https://github.com/user-attachments/assets/1f326865-f5a4-4e89-812c-ac6b688be4a2" />

### 🌐 Multi-language Support

This application is fully internationalized using i18next, allowing for seamless language switching. We currently support English (EN), Japanese (JP), and Vietnamese (VN) to ensure a localized user experience.

<img width="1423" height="221" alt="image" src="https://github.com/user-attachments/assets/b2e5cb72-1a2b-4d96-93b3-2ec1780ca208" />

### 💬 Live Pharmacist Consultation

Users can connect directly with professional pharmacists via our real-time chat interface. This feature enables instant consultation regarding prescriptions, medication usage, and general health advice.
> Admin
<img width="2850" height="1372" alt="image" src="https://github.com/user-attachments/assets/0cd275e9-1d98-41bf-83b8-48b43a24bf28" />

> Customer
<img width="1158" height="687" alt="image" src="https://github.com/user-attachments/assets/19229afc-e359-4f19-b2de-b1edd871c764" />

### 🙍‍♂️ User Profile Management

After logging in, users can access their profile to update personal information.

<img width="1440" height="627" alt="image" src="https://github.com/user-attachments/assets/6f8edbce-f7af-4c16-b82f-f7dde4dc8fe0" />

## 🏠 Shipping Address Management

Users can manage their shipping addresses to ensure accurate delivery. Each user can add, update, or select from multiple saved addresses.

### ➕ Add New Address
<img width="1440" height="811" alt="image" src="https://github.com/user-attachments/assets/fc514c96-b734-4b5d-b75c-3c7461d4c918" />

### 📭 No Address Available
If the user has no address yet, a message is shown:
> "You have not added any shipping address yet."

<img width="1425" height="685" alt="image" src="https://github.com/user-attachments/assets/cf6c5512-2e8f-4e32-9a2f-92e029547435" />


## 🛍️ Flexible Ordering Options

The system supports two methods for placing orders:

### 🛒 1. Add to Cart
- Users can browse and add multiple products to their shopping cart.
- Once ready, they can go to the cart, review their items, select a shipping address, and confirm the order.
- Best for users buying multiple products in one checkout.
<img width="1440" height="686" alt="Ảnh màn hình 2026-01-01 lúc 21 37 14" src="https://github.com/user-attachments/assets/a60fc906-dc69-421f-b328-9e4e35be0c11" />

- Users can:
  - Modify product quantity
  - Remove items from the cart
  - Proceed to checkout

> This allows users to review their selected items before placing an order.
<img width="1424" height="660" alt="image" src="https://github.com/user-attachments/assets/14b47261-7bd0-4afa-9d27-323f4855f595" />

### 🧾 Checkout Page

After clicking the “Place Order” button, users are redirected to the checkout page where they can review and confirm their order before finalizing it.

#### ✅ Key features on the checkout page:

> This page ensures users can verify all details before placing an order.
<img width="1440" height="812" alt="image" src="https://github.com/user-attachments/assets/9eccd646-72cb-4f5c-9783-4ca0f4af002f" />

### 🏠 Default Shipping Address & Selection

When placing an order, the system automatically uses the user's **default shipping address**.

> This ensures the order is shipped to the correct location, with flexibility for the user to choose.
<img width="1440" height="687" alt="image" src="https://github.com/user-attachments/assets/5b6acfd5-8b81-4dc3-83da-424c3fe81877" />

### ⚡ 2. Buy Now
When users click the **"Buy Now"** button on a product, they are redirected to the same checkout page used for cart purchases.

> The buying process is identical to the cart flow, but for a single product only.
<img width="1440" height="811" alt="Ảnh màn hình 2026-01-04 lúc 23 37 18" src="https://github.com/user-attachments/assets/3b2343d1-0cdb-4ac2-b315-60b9afad8161" />
## 📦 Order History

Users can view their full order history on a dedicated page.

- 🕓 If no orders have been placed yet, the following message will be shown:
  > "You have not placed any orders yet."

> All orders, regardless of the purchase method, are tracked and displayed here.

### 🕓 No Orders Yet
<img width="1438" height="687" alt="image" src="https://github.com/user-attachments/assets/c76a3411-bad0-4ce1-b596-bfc85fd9ceb9" />

### ✅ Order History (after placing orders)
<img width="1440" height="667" alt="image" src="https://github.com/user-attachments/assets/33719802-6adc-4a82-b083-0e3993bf22a9" />

When clicking on an order, detailed information is displayed, including total amount, delivery method, and order status. Users can also cancel the order if it's still pending.
<img width="1438" height="690" alt="image" src="https://github.com/user-attachments/assets/63a2bd09-ec1a-4654-bd27-de4537a9793a" />
<img width="1440" height="398" alt="image" src="https://github.com/user-attachments/assets/255bc2ac-470a-47cc-bcb3-8fe1f5fd78db" />

### 🔴 Canceling Orders

Users can cancel an order while it's still in the **Pending** status.
- Once canceled, the order is moved to the **Cancelled Orders** section
- The admin will no longer process or confirm this order
- The status is updated accordingly
  
### ♻️ Restore Orders

Canceled orders can be restored and moved back to the "Pending Orders" section, allowing them to be processed again by the admin.

## 🛠️ Admin 

> All fields are required to ensure complete product information.
<img width="1439" height="684" alt="image" src="https://github.com/user-attachments/assets/5df31ab8-d70b-4dbd-8788-12f0d0936183" />

### 🛒 Product Management (Admin)
Admin can manage all products in the system with the following features:
- Trash Bin : Can restore products back to the main product list and permanently delete products from the system
---
### 👥 Customer Management (Admin)

Admin can manage user accounts with the following features:

<img width="1439" height="685" alt="image" src="https://github.com/user-attachments/assets/3f193389-2c61-4999-968f-c15b5fcf3a4d" />

---
>Can search by Phone or Username
Quickly search for customers using their phone number or username.

### 📦 Order Management (Admin)

Admins can manage all customer orders with the following features:

- 🔍 Search by username or phone number  
- 📅 Filter orders by date
<img width="1440" height="685" alt="image" src="https://github.com/user-attachments/assets/14c9c8d1-6684-4ced-90fd-ef6b2d96292b" />

### 📄 Order Details

> Once confirmed, the order is considered officially placed and ready for processing.
<img width="1439" height="686" alt="image" src="https://github.com/user-attachments/assets/7688e3c9-7d5e-4e5e-b698-c6a3e34445dc" />

## 📊 Statistics

The admin dashboard includes a statistics section with the following features:

---

### 📅 Monthly Revenue Overview

Displays a ranked list of best-selling products with performance indicators:

- 🔥 **Good**: Sold over 500 units  
- 👍 **Average**: Sold between 200–500 units 
- ⚠️ **Poor**: Sold under 100 units
> Icons help quickly identify how well each product is performing.
<img width="1437" height="694" alt="image" src="https://github.com/user-attachments/assets/49d1614e-81c3-454d-98e2-bc2ba26a13dd" />

## 🙏 Thank You

Thank you for taking the time to review my project.  
I appreciate your attention and welcome any feedback or suggestions



