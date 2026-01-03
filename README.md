# 💊 ePharmaStore

## 📌 Project Overview

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

### 🙍‍♂️ User Profile Management

After logging in, users can access their profile to update personal information.

<img width="1440" height="627" alt="image" src="https://github.com/user-attachments/assets/6f8edbce-f7af-4c16-b82f-f7dde4dc8fe0" />

## 🏠 Shipping Address Management

Users can manage their shipping addresses to ensure accurate delivery. Each user can add, update, or select from multiple saved addresses.

### ➕ Add New Address
<img width="1425" height="685" alt="image" src="https://github.com/user-attachments/assets/cf6c5512-2e8f-4e32-9a2f-92e029547435" />

### 📭 No Address Available
If the user has no address yet, a message is shown:
> "You have not added any shipping address yet."

<img width="1437" height="691" alt="Ảnh màn hình 2025-07-29 lúc 12 01 20" src="https://github.com/user-attachments/assets/c88f7959-82f9-4627-a6d1-30c9f6184b00" />


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
<img width="1440" height="687" alt="image" src="https://github.com/user-attachments/assets/5b6acfd5-8b81-4dc3-83da-424c3fe81877" />

### 🏠 Default Shipping Address & Selection

When placing an order, the system automatically uses the user's **default shipping address**.

> This ensures the order is shipped to the correct location, with flexibility for the user to choose.
<img width="1440" height="694" alt="Ảnh màn hình 2025-07-29 lúc 12 21 10" src="https://github.com/user-attachments/assets/c03cc56b-a1b0-40ee-8bc3-94a02a634b83" />

### ⚡ 2. Buy Now
When users click the **"Buy Now"** button on a product, they are redirected to the same checkout page used for cart purchases.

> The buying process is identical to the cart flow, but for a single product only.
<img width="1437" height="690" alt="Ảnh màn hình 2025-07-29 lúc 12 27 08" src="https://github.com/user-attachments/assets/891e0fe4-8743-4546-af3d-baf9705e2669" />
## 📦 Order History

Users can view their full order history on a dedicated page.

- 🕓 If no orders have been placed yet, the following message will be shown:
  > "You have not placed any orders yet."

> All orders, regardless of the purchase method, are tracked and displayed here.

### 🕓 No Orders Yet
<img width="1440" height="812" alt="Ảnh màn hình 2025-07-29 lúc 12 05 24" src="https://github.com/user-attachments/assets/3f123601-5104-4ef2-ba5a-f5ff74222c67" />

### ✅ Order History (after placing orders)
<img width="1437" height="690" alt="Ảnh màn hình 2025-07-29 lúc 12 38 20" src="https://github.com/user-attachments/assets/7080ed68-6d30-4d19-bfcd-33db48910b43" />

When clicking on an order, detailed information is displayed, including total amount, delivery method, and order status. Users can also cancel the order if it's still pending.
<img width="1437" height="689" alt="Ảnh màn hình 2025-07-29 lúc 12 38 46" src="https://github.com/user-attachments/assets/066c7f30-985a-483d-bac3-fa1a17ce7bdf" />
<img width="1436" height="694" alt="Ảnh màn hình 2025-07-29 lúc 12 38 57" src="https://github.com/user-attachments/assets/00e9ae8e-b4b2-4e61-b28a-1536a8c11dd3" />

### 🔴 Canceling Orders

Users can cancel an order while it's still in the **Pending** status.
- Once canceled, the order is moved to the **Cancelled Orders** section
- The admin will no longer process or confirm this order
- The status is updated accordingly
  
### ♻️ Restore Orders

Canceled orders can be restored and moved back to the "Pending Orders" section, allowing them to be processed again by the admin.

## 🛠️ Admin 

> All fields are required to ensure complete product information.
<img width="1439" height="695" alt="Ảnh màn hình 2025-07-29 lúc 14 09 48" src="https://github.com/user-attachments/assets/772ea645-2ea8-4ac2-9ddc-f629089fdde1" />

### 🛒 Product Management (Admin)
Admin can manage all products in the system with the following features:
- Trash Bin : Can restore products back to the main product list and permanently delete products from the system
---
### 👥 Customer Management (Admin)

Admin can manage user accounts with the following features:

<img width="1440" height="696" alt="Ảnh màn hình 2025-07-29 lúc 14 23 30" src="https://github.com/user-attachments/assets/d9238e1b-edda-40b6-a922-291fcc224981" />
---
>Can search by Phone or Username
Quickly search for customers using their phone number or username.

### 📦 Order Management (Admin)

Admins can manage all customer orders with the following features:

- 🔍 Search by username or phone number  
- 📅 Filter orders by date
<img width="1437" height="693" alt="Ảnh màn hình 2025-07-29 lúc 14 27 25" src="https://github.com/user-attachments/assets/0eaedc14-4e77-4895-949f-f42f77938ba7" />

### 📄 Order Details

> Once confirmed, the order is considered officially placed and ready for processing.
<img width="1435" height="691" alt="Ảnh màn hình 2025-07-29 lúc 14 29 04" src="https://github.com/user-attachments/assets/4c89f868-2dac-4bf8-b1c6-8d274c9039ca" />

## 📊 Statistics

The admin dashboard includes a statistics section with the following features:

---
### 📅 Monthly Revenue Overview

Displays a ranked list of best-selling products with performance indicators:

- 🔥 **Good**: Sold over 500 units  
- 👍 **Average**: Sold between 200–500 units 
- ⚠️ **Poor**: Sold under 100 units
> Icons help quickly identify how well each product is performing.
<img width="1435" height="692" alt="Ảnh màn hình 2025-07-29 lúc 14 33 30" src="https://github.com/user-attachments/assets/09e6172c-2111-4c48-9f82-83afe22f3168" />

## 🙏 Thank You

Thank you for taking the time to review my project.  
I appreciate your attention and welcome any feedback or suggestions



