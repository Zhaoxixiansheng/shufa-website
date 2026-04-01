// 移动端导航菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // 点击菜单项后关闭菜单
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});

// 表单提交处理（示例）
function handleFormSubmit(event, formType) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // 这里可以连接到 Cloudflare Workers 或其他后端服务
    console.log('表单数据:', data);
    
    alert('提交成功！我们会尽快联系您。');
    form.reset();
}

// 课程预约时间选择
function selectTimeSlot(slot) {
    const slots = document.querySelectorAll('.time-slot');
    slots.forEach(s => s.classList.remove('selected'));
    slot.classList.add('selected');
}
