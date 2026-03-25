import { db, collection, addDoc } from './firebase-config.js';

// --- Giữ nguyên các hàm Header, Mobile Nav và Slide ở trên ---
// (Tôi chỉ tập trung sửa phần Form dưới đây)

const appointmentForm = document.getElementById('appointmentForm');

if (appointmentForm) {
    appointmentForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        
        const submitBtn = appointmentForm.querySelector('button[type="submit"]');
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        // Lấy chính xác giá trị từ các ô input
        const inputs = appointmentForm.querySelectorAll('input');
        const textarea = appointmentForm.querySelector('textarea');

        const formData = {
            name: inputs[0].value,
            email: inputs[1].value,
            date: inputs[2].value,
            message: textarea.value,
            createdAt: new Date()
        };

        try {
            await addDoc(collection(db, "appointments"), formData);
            alert('Cảm ơn bạn! Lịch hẹn đã được gửi thành công.');
            appointmentForm.reset();
        } catch (error) {
            console.error("Lỗi Firebase:", error);
            alert('Lỗi: ' + error.message);
        } finally {
            submitBtn.textContent = "Book Appointment";
            submitBtn.disabled = false;
        }
    });
}