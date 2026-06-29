# TN-DDA22TTD-110122028-LieuKienAn-QLcongvieccanhan-node.js

## Mục tiêu

TaskFlow là ứng dụng web quản lý công việc cá nhân dành cho sinh viên, tích hợp trí tuệ nhân tạo Google Gemini và kỹ thuật gamification.

## Kiến trúc hệ thống

```
Frontend (Vue 3 + Vite)  →  Backend (Node.js + Express)  →  Database (MySQL / TiDB Cloud)
```

## Cấu trúc thư mục

```
├── backend/                    # Mã nguồn phía server
│   ├── src/
│   │   ├── config/             # Cấu hình database
│   │   ├── controllers/        # Xử lý logic API
│   │   ├── middleware/         # Xác thực JWT
│   │   ├── models/            # Truy vấn database
│   │   ├── routes/            # Định nghĩa API
│   │   └── utils/             # Hàm tiện ích
│   └── server.js              # Entry point
├── frontend/                   # Mã nguồn phía client
│   ├── src/
│   │   ├── api/               # Axios API client
│   │   ├── assets/            # CSS, hình ảnh
│   │   ├── components/        # Component tái sử dụng
│   │   ├── router/            # Vue Router
│   │   ├── stores/            # Pinia state
│   │   └── views/             # Các trang giao diện
│   └── vite.config.js
├── images/                     # Hình ảnh tài liệu
├── word/                       # Word khóa luận
└── README.md
```

## Phần mềm cần thiết

| Phần mềm | Phiên bản |
|-----------|-----------|
| Node.js | >= 18.x |
| npm | >= 9.x |
| MySQL | >= 8.0 |
| Git | >= 2.x |

## Cách chạy chương trình

### Backend
```bash
cd backend
npm install
node server.js
```

### Frontend
```bash
cd frontend
npm install
npx vite --port 5173
```

### Tài khoản mặc định
- Admin: admin@taskflow.com / password
- User: Tạo tài khoản mới

## Công nghệ

| Lớp | Công nghệ |
|-----|-----------|
| Frontend | Vue 3, Vite, Pinia, Chart.js |
| Backend | Node.js, Express, Socket.IO, JWT |
| Database | MySQL 8.0 (TiDB Cloud) |
| AI | Google Gemini API |
| Mobile | Capacitor (Android APK) |
| Deploy | Render.com |

## Tác giả

- Liễu Kiện An — MSSV: 110122028
- Đại học Trà Vinh — Khoa KTCN
- GV hướng dẫn: ThS. Nguyễn Khắc Quốc
