const pptxgen = require('pptxgenjs');
const path = require('path');
const pptx = new pptxgen();
const C = { navy:'0A1F44',blue:'0F3460',blueMid:'1565C0',blueLight:'42A5F5',bluePale:'90CAF9',orange:'F4AB19',orangeDark:'E65100',white:'FFFFFF',gray200:'E2E8F0',gray400:'94A3B8',gray600:'475569',green:'16A34A',teal:'0D9488',red:'DC2626',purple:'7C3AED' };
const W=13.33,H=7.5,DIR=path.join(__dirname,'ppt-screenshots');
pptx.layout='LAYOUT_WIDE'; pptx.author='Liễu Kiện An'; pptx.title='Bảo vệ Đồ án - TaskFlow';

function bgL(s){s.background={fill:C.white};s.addShape(pptx.shapes.RECTANGLE,{x:0,y:0,w:W,h:0.7,fill:{color:C.navy}});s.addShape(pptx.shapes.RECTANGLE,{x:0,y:0.7,w:W,h:0.04,fill:{color:C.orange}});s.addShape(pptx.shapes.RECTANGLE,{x:0,y:H-0.45,w:W,h:0.45,fill:{color:C.navy}});}
function bgC(s){s.background={fill:C.navy};s.addShape(pptx.shapes.OVAL,{x:-3,y:-3,w:10,h:10,fill:{color:C.blue,transparency:50}});s.addShape(pptx.shapes.OVAL,{x:5,y:1,w:8,h:8,fill:{color:C.blueMid,transparency:60}});s.addShape(pptx.shapes.OVAL,{x:8,y:0,w:5,h:5,fill:{color:C.blueLight,transparency:70}});}
function bgS(s){s.background={fill:C.blue};s.addShape(pptx.shapes.OVAL,{x:-2,y:-2,w:8,h:10,fill:{color:C.blueMid,transparency:55}});s.addShape(pptx.shapes.OVAL,{x:6,y:0,w:9,h:8,fill:{color:C.blueLight,transparency:65}});s.addShape(pptx.shapes.OVAL,{x:9,y:3,w:6,h:6,fill:{color:C.orange,transparency:85}});}
function ft(s,n){s.addText('Liễu Kiện An - MSSV: 110122028 - ĐH Trà Vinh 2025',{x:0.5,y:H-0.4,w:W-2,h:0.35,fontSize:9,color:C.white,fontFace:'Calibri',align:'center',valign:'middle'});s.addText(n+'/17',{x:W-1.5,y:H-0.4,w:1.2,h:0.35,fontSize:9,color:C.bluePale,fontFace:'Calibri',align:'right',valign:'middle'});}
const T=17;

// SLIDE 1: BIA
let s=pptx.addSlide(); bgC(s);
s.addText('ĐẠI HỌC TRÀ VINH - KHOA KỸ THUẬT & CÔNG NGHỆ',{x:0,y:1.0,w:W,h:0.3,fontSize:11,color:C.bluePale,fontFace:'Calibri',align:'center',bold:true,letterSpacing:2});
s.addText('KHÓA LUẬN TỐT NGHIỆP',{x:0,y:1.5,w:W,h:0.4,fontSize:14,color:C.orange,fontFace:'Calibri',align:'center',bold:true,letterSpacing:3});
s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:1.5,y:2.1,w:10.3,h:1.5,fill:{color:C.white,transparency:10},shadow:{type:'outer',blur:12,offset:3,color:'000000',opacity:0.1},rectRadius:0.15});
s.addText('THIẾT KẾ VÀ PHÁT TRIỂN\nHỆ THỐNG QUẢN LÝ CÔNG VIỆC\nCÁ NHÂN DỰA TRÊN NỀN TẢNG WEB',{x:1.5,y:2.1,w:10.3,h:1.5,fontSize:26,color:C.navy,fontFace:'Calibri',bold:true,align:'center',valign:'middle',lineSpacingMultiple:1.2});
s.addShape(pptx.shapes.RECTANGLE,{x:5.5,y:3.8,w:2.3,h:0.04,fill:{color:C.orange}});
s.addText('Ứng dụng AI Google Gemini và gamification',{x:2,y:4.0,w:9.3,h:0.5,fontSize:13,color:C.bluePale,fontFace:'Calibri',italic:true,align:'center'});
s.addText('Sinh viên: LIỄU KIỆN AN  |  MSSV: 110122028',{x:3.5,y:4.8,w:6.3,h:0.4,fontSize:13,color:C.white,fontFace:'Calibri',align:'center',bold:true});
s.addText('GV hướng dẫn: ThS. NGUYỄN KHẮC QUỐC',{x:3.5,y:5.2,w:6.3,h:0.4,fontSize:13,color:C.orange,fontFace:'Calibri',align:'center',bold:true});
s.addText('Trà Vinh, 2025',{x:0,y:H-0.35,w:W,h:0.3,fontSize:10,color:C.blueLight,fontFace:'Calibri',align:'center'});

// SLIDE 2: BO CAU
s=pptx.addSlide(); bgC(s);
s.addText('BỐ CỤC ĐỀ TÀI',{x:0,y:0.8,w:W,h:0.7,fontSize:34,color:C.white,fontFace:'Calibri',bold:true,align:'center'});
s.addShape(pptx.shapes.RECTANGLE,{x:5.5,y:1.55,w:2.3,h:0.04,fill:{color:C.orange}});
[{n:'1',t:'ĐẶT VẤN ĐỀ',d:'Mục tiêu, đối tượng và phương pháp',c:C.orange},{n:'2',t:'NỘI DUNG VÀ KẾT QUẢ NGHIÊN CỨU',d:'Kiến trúc, thiết kế, triển khai & kiểm thử',c:C.blueLight},{n:'3',t:'KẾT LUẬN VÀ KIẾN NGHỊ',d:'Kết quả đạt được và hướng phát triển',c:C.bluePale}].forEach((p,i)=>{const py=2.2+i*1.5;s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:2,y:py,w:9.3,h:1.1,fill:{color:C.white,transparency:8},shadow:{type:'outer',blur:6,offset:2,color:'000000',opacity:0.1},rectRadius:0.12});s.addShape(pptx.shapes.OVAL,{x:2.3,y:py+0.2,w:0.7,h:0.7,fill:{color:p.c}});s.addText(p.n,{x:2.3,y:py+0.2,w:0.7,h:0.7,fontSize:20,color:C.white,fontFace:'Calibri',align:'center',valign:'middle',bold:true});s.addText(p.t,{x:3.3,y:py+0.1,w:7.5,h:0.5,fontSize:16,color:C.white,fontFace:'Calibri',bold:true,valign:'middle'});s.addText(p.d,{x:3.3,y:py+0.6,w:7.5,h:0.35,fontSize:11,color:C.bluePale,fontFace:'Calibri'});});
ft(s,2);

// SLIDE 3: SECTION 1
s=pptx.addSlide(); bgS(s);
s.addText('PHẦN 1',{x:1,y:2.0,w:4,h:0.5,fontSize:16,color:C.orange,fontFace:'Calibri',bold:true,letterSpacing:4});
s.addText('ĐẶT VẤN ĐỀ',{x:1,y:2.5,w:10,h:1,fontSize:44,color:C.white,fontFace:'Calibri',bold:true});
s.addShape(pptx.shapes.RECTANGLE,{x:1,y:3.6,w:2.5,h:0.05,fill:{color:C.orange}});
s.addText('Mục tiêu, đối tượng và phương pháp nghiên cứu',{x:1,y:3.8,w:8,h:0.5,fontSize:14,color:C.bluePale,fontFace:'Calibri',italic:true});

// SLIDE 4: LY DO CHON DE TAI + ICONS
s=pptx.addSlide(); bgL(s);
s.addText('Lý do chọn đề tài',{x:0.6,y:0.9,w:5,h:0.4,fontSize:24,color:C.navy,fontFace:'Calibri',bold:true});
s.addShape(pptx.shapes.RECTANGLE,{x:0.6,y:1.35,w:1.2,h:0.04,fill:{color:C.orange}});

// 4 icon tron trai
var icons=[
  {emoji:'📋',label:'Phân mảnh',color:C.red},
  {emoji:'⏰',label:'Trễ deadline',color:C.orange},
  {emoji:'🤖',label:'AI hỗ trợ',color:C.blueMid},
  {emoji:'🎮',label:'Gamification',color:C.green}
];
icons.forEach((ic,i)=>{
  var iy=1.8+i*1.2;
  s.addShape(pptx.shapes.OVAL,{x:0.8,y:iy,w:0.9,h:0.9,fill:{color:ic.color},shadow:{type:'outer',blur:6,offset:2,color:'000000',opacity:0.12}});
  s.addText(ic.emoji,{x:0.8,y:iy,w:0.9,h:0.9,fontSize:28,align:'center',valign:'middle'});
  s.addText(ic.label,{x:0.65,y:iy+0.95,w:1.2,h:0.25,fontSize:9,color:C.gray600,fontFace:'Calibri',align:'center',bold:true});
});

// noi dung phai
s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:2.4,y:1.7,w:6,h:4.8,fill:{color:C.blueVLight},rectRadius:0.15});
s.addText('Vấn đề',{x:2.7,y:1.85,w:5.5,h:0.35,fontSize:16,color:C.red,fontFace:'Calibri',bold:true});
s.addText('• Thông tin công việc bị phân mảnh trên nhiều nền tảng (Zalo, Email, Sổ tay)\n• Dễ bỏ sót deadline, thiếu cái nhìn tổng quan về tiến độ\n• Stress và giảm năng suất do quản lý thời gian không hiệu quả',{x:2.7,y:2.3,w:5.5,h:1.5,fontSize:12,color:C.gray600,fontFace:'Calibri',lineSpacingMultiple:1.6});
s.addText('Giải pháp',{x:2.7,y:3.9,w:5.5,h:0.35,fontSize:16,color:C.green,fontFace:'Calibri',bold:true});
s.addText('• Web app tích hợp đa chức năng, responsive Desktop + Mobile\n• Trợ lý AI Google Gemini hỗ trợ tạo & phân rã task\n• Gamification tạo động lực: XP, Level, Badge, Leaderboard\n• Mã nguồn mở, miễn phí cho sinh viên Việt Nam',{x:2.7,y:4.35,w:5.5,h:2.0,fontSize:12,color:C.gray600,fontFace:'Calibri',lineSpacingMultiple:1.6});

// box phai tren
s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:8.7,y:1.7,w:4.1,h:4.8,fill:{color:C.navy},rectRadius:0.15});
s.addText('Đề tài',{x:8.9,y:1.9,w:3.7,h:0.3,fontSize:12,color:C.orange,fontFace:'Calibri',bold:true,align:'center'});
s.addText('"Thiết kế và phát triển\nhệ thống quản lý công việc\ncá nhân dựa trên\nnền tảng web"',{x:8.9,y:2.3,w:3.7,h:2.0,fontSize:16,color:C.white,fontFace:'Calibri',bold:true,align:'center',lineSpacingMultiple:1.4});
s.addShape(pptx.shapes.RECTANGLE,{x:9.6,y:4.5,w:2.2,h:0.04,fill:{color:C.orange}});
s.addText('AI Gemini + Gamification\n+ Vue 3 + Node.js',{x:8.9,y:4.7,w:3.7,h:0.8,fontSize:11,color:C.bluePale,fontFace:'Calibri',align:'center',lineSpacingMultiple:1.4});
ft(s,4);

// SLIDE 5: MUC TIÊU + SCREENSHOT
s=pptx.addSlide(); bgL(s);
s.addText('Mục tiêu nghiên cứu',{x:0.6,y:0.9,w:4,h:0.4,fontSize:24,color:C.navy,fontFace:'Calibri',bold:true});
s.addShape(pptx.shapes.RECTANGLE,{x:0.6,y:1.35,w:1.2,h:0.04,fill:{color:C.orange}});
s.addImage({path:path.join(DIR,'01-dashboard.png'),x:0.6,y:1.7,w:7.2,h:4.3,type:'png',rounding:true});
s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:8.2,y:1.7,w:4.5,h:4.3,fill:{color:C.blueVLight},rectRadius:0.12});
s.addText('4 mục tiêu chính',{x:8.4,y:1.85,w:4,h:0.35,fontSize:15,color:C.navy,fontFace:'Calibri',bold:true});
s.addText('📋 Quản lý công việc\n   Kanban, Eisenhower, Pomodoro\n\n📚 Công cụ học tập\n   GPA, Ghi chú, Flashcards\n\n🤖 Trợ lý AI\n   Gemini + Function Calling\n\n🎮 Gamification\n   XP, Level, Badge, Streak',{x:8.4,y:2.3,w:4,h:3.5,fontSize:11.5,color:C.gray600,fontFace:'Calibri',lineSpacingMultiple:1.35});
ft(s,5);

// SLIDE 6: PHUONG PHAP
s=pptx.addSlide(); bgL(s);
s.addText('Phương pháp nghiên cứu',{x:0.6,y:0.9,w:5,h:0.4,fontSize:24,color:C.navy,fontFace:'Calibri',bold:true});
s.addShape(pptx.shapes.RECTANGLE,{x:0.6,y:1.35,w:1.2,h:0.04,fill:{color:C.orange}});
s.addImage({path:path.join(DIR,'02-tasks.png'),x:0.6,y:1.7,w:5.8,h:3.5,type:'png',rounding:true});
s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:6.8,y:1.7,w:5.9,h:3.5,fill:{color:C.blueVLight},rectRadius:0.12});
s.addText('Cấu trúc đồ án 4 chương',{x:7.0,y:1.85,w:5.5,h:0.35,fontSize:15,color:C.navy,fontFace:'Calibri',bold:true});
s.addText('Chương 1: Tổng quan đề tài\nChương 2: Công nghệ (Vue 3, Node.js, Gemini)\nChương 3: Thiết kế (Kiến trúc, CSDL, UI/UX)\nChương 4: Triển khai (Tính năng, Test, Deploy)',{x:7.0,y:2.3,w:5.5,h:1.5,fontSize:12,color:C.gray600,fontFace:'Calibri',lineSpacingMultiple:1.7});
s.addText('Đối tượng: Hệ thống quản lý công việc cá nhân\nPhương pháp: Agile/Scrum, TDD, UML', {x:7.0,y:4.0,w:5.5,h:0.8,fontSize:12,color:C.gray600,fontFace:'Calibri',lineSpacingMultiple:1.5});
ft(s,6);
// SLIDE 7: SECTION 2
s=pptx.addSlide(); bgS(s);
s.addText('PHẦN 2',{x:1,y:2.0,w:4,h:0.5,fontSize:16,color:C.orange,fontFace:'Calibri',bold:true,letterSpacing:4});
s.addText('NỘI DUNG VÀ\nKẾT QUẢ NGHIÊN CỨU',{x:1,y:2.5,w:10,h:1.5,fontSize:42,color:C.white,fontFace:'Calibri',bold:true,lineSpacingMultiple:1.2});
s.addShape(pptx.shapes.RECTANGLE,{x:1,y:4.2,w:2.5,h:0.05,fill:{color:C.orange}});
s.addText('Kiến trúc, Thiết kế, Triển khai và Kiểm thử',{x:1,y:4.4,w:8,h:0.5,fontSize:14,color:C.bluePale,fontFace:'Calibri',italic:true});

// SLIDE 8: KIEN TRUC + SCREENSHOT
s=pptx.addSlide(); bgL(s);
s.addText('Kiến trúc hệ thống 3 tầng',{x:0.6,y:0.9,w:5,h:0.4,fontSize:24,color:C.navy,fontFace:'Calibri',bold:true});
s.addShape(pptx.shapes.RECTANGLE,{x:0.6,y:1.35,w:1.2,h:0.04,fill:{color:C.orange}});
s.addImage({path:path.join(DIR,'01-dashboard.png'),x:0.6,y:1.7,w:7.2,h:4.3,type:'png',rounding:true});
[{t:'Frontend',d:'Vue 3 + Vite\nPinia, Chart.js, Capacitor',c:C.blueMid},{t:'Backend',d:'Node.js + Express\nJWT, Socket.IO, Gemini',c:C.orange},{t:'Database',d:'MySQL (TiDB Cloud)\n29 bảng, 50+ API',c:C.purple}].forEach((p,i)=>{
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:8.2,y:1.7+i*1.5,w:4.5,h:1.3,fill:{color:C.white},shadow:{type:'outer',blur:4,offset:2,color:'000000',opacity:0.06},line:{color:C.gray200,width:0.5},rectRadius:0.1});
  s.addShape(pptx.shapes.RECTANGLE,{x:8.2,y:1.7+i*1.5,w:0.06,h:1.3,fill:{color:p.c}});
  s.addText(p.t,{x:8.5,y:1.75+i*1.5,w:4,h:0.35,fontSize:14,color:p.c,fontFace:'Calibri',bold:true});
  s.addText(p.d,{x:8.5,y:2.1+i*1.5,w:4,h:0.7,fontSize:11,color:C.gray600,fontFace:'Calibri',lineSpacingMultiple:1.4});
});
ft(s,8);

// SLIDE 9: CSDL + SCREENSHOT
s=pptx.addSlide(); bgL(s);
s.addText('Thiết kế cơ sở dữ liệu',{x:0.6,y:0.9,w:5,h:0.4,fontSize:24,color:C.navy,fontFace:'Calibri',bold:true});
s.addShape(pptx.shapes.RECTANGLE,{x:0.6,y:1.35,w:1.2,h:0.04,fill:{color:C.orange}});
s.addImage({path:path.join(DIR,'02-tasks.png'),x:0.6,y:1.7,w:7.2,h:4.3,type:'png',rounding:true});
s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:8.2,y:1.7,w:4.5,h:4.3,fill:{color:C.blueVLight},rectRadius:0.12});
s.addText('29 bảng — 7 nhóm',{x:8.4,y:1.85,w:4,h:0.35,fontSize:15,color:C.navy,fontFace:'Calibri',bold:true});
s.addText('Users: users, settings, sessions\nTasks: tasks, subtasks, deps, comments\nProjects: projects, members\nCategories: categories, task_categories\nNotes: notes, flashcards, decks\nGrades: grades, habits, entries\nSystem: notifications, contacts, logs',{x:8.4,y:2.3,w:4,h:3.0,fontSize:10.5,color:C.gray600,fontFace:'Calibri',lineSpacingMultiple:1.6});
s.addText('FK CASCADE · UUID keys · TiDB Cloud',{x:8.4,y:5.2,w:4,h:0.3,fontSize:9,color:C.gray400,fontFace:'Calibri',align:'center'});
ft(s,9);

// SLIDE 10: AI + SCREENSHOT
s=pptx.addSlide(); bgL(s);
s.addText('Trợ lý AI — Google Gemini',{x:0.6,y:0.9,w:5,h:0.4,fontSize:24,color:C.navy,fontFace:'Calibri',bold:true});
s.addShape(pptx.shapes.RECTANGLE,{x:0.6,y:1.35,w:1.2,h:0.04,fill:{color:C.orange}});
s.addImage({path:path.join(DIR,'01-dashboard.png'),x:0.6,y:1.7,w:5.8,h:3.5,type:'png',rounding:true});
[{t:'AI Quick Task',d:'Tiếng Việt → Tạo task tự động',c:C.purple},{t:'AI Decompose',d:'Task lớn → Phân rã subtask',c:C.blueMid},{t:'AI Coach',d:'Chatbot cố vấn hiệu suất',c:C.green},{t:'AI Quiz',d:'Ghi chú → Câu hỏi trắc nghiệm',c:C.orange}].forEach((p,i)=>{
  const fx=6.8+(i%2)*3.1,fy=1.7+Math.floor(i/2)*1.8;
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:fx,y:fy,w:2.9,h:1.5,fill:{color:C.white},shadow:{type:'outer',blur:4,offset:2,color:'000000',opacity:0.06},line:{color:C.gray200,width:0.5},rectRadius:0.1});
  s.addShape(pptx.shapes.RECTANGLE,{x:fx,y:fy,w:2.9,h:0.05,fill:{color:p.c}});
  s.addText(p.t,{x:fx+0.15,y:fy+0.15,w:2.6,h:0.35,fontSize:13,color:p.c,fontFace:'Calibri',bold:true});
  s.addText(p.d,{x:fx+0.15,y:fy+0.55,w:2.6,h:0.7,fontSize:11,color:C.gray600,fontFace:'Calibri',lineSpacingMultiple:1.4});
});
ft(s,10);

// SLIDE 11: GAMIFICATION + SCREENSHOT
s=pptx.addSlide(); bgL(s);
s.addText('Hệ thống Gamification',{x:0.6,y:0.9,w:5,h:0.4,fontSize:24,color:C.navy,fontFace:'Calibri',bold:true});
s.addShape(pptx.shapes.RECTANGLE,{x:0.6,y:1.35,w:1.2,h:0.04,fill:{color:C.orange}});
s.addImage({path:path.join(DIR,'01-dashboard.png'),x:0.6,y:1.7,w:5.8,h:3.5,type:'png',rounding:true});
s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:6.8,y:1.7,w:5.9,h:3.5,fill:{color:C.blueVLight},rectRadius:0.12});
s.addText('Cơ chế tạo động lực',{x:7.0,y:1.85,w:5.5,h:0.35,fontSize:15,color:C.navy,fontFace:'Calibri',bold:true});
s.addText('⭐ +10 XP hoàn thành task\n🔥 +5 XP/ngày duy trì thói quen\n🎯 +20 XP đạt mục tiêu OKR\n📚 +15 XP học flashcard\n\n📈 Level = √(XP/100)\n🎖️ Badge achievement system\n🏆 Leaderboard top 10',{x:7.0,y:2.3,w:5.5,h:2.7,fontSize:12,color:C.gray600,fontFace:'Calibri',lineSpacingMultiple:1.5});
ft(s,11);

// SLIDE 12: KET QUA + SCREENSHOT
s=pptx.addSlide(); bgL(s);
s.addText('Kết quả triển khai',{x:0.6,y:0.9,w:5,h:0.4,fontSize:24,color:C.navy,fontFace:'Calibri',bold:true});
s.addShape(pptx.shapes.RECTANGLE,{x:0.6,y:1.35,w:1.2,h:0.04,fill:{color:C.orange}});
s.addImage({path:path.join(DIR,'06-gpa.png'),x:0.6,y:1.7,w:5.8,h:3.5,type:'png',rounding:true});
s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:6.8,y:1.7,w:5.9,h:3.5,fill:{color:C.blueVLight},rectRadius:0.12});
s.addText('15+ giao diện · 50+ API · 29 bảng',{x:7.0,y:1.85,w:5.5,h:0.35,fontSize:14,color:C.navy,fontFace:'Calibri',bold:true});
s.addText('User: Dashboard, Nhiệm vụ, Dự án, Lịch,\nPomodoro, GPA, OKR, Ghi chú, Báo cáo, Hồ sơ\n\nAdmin: Users, Projects, Categories, Logs,\nNotifications, Settings, Contact, CSV Export\n\nDeploy: Render.com + TiDB Cloud + APK',{x:7.0,y:2.3,w:5.5,h:2.7,fontSize:12,color:C.gray600,fontFace:'Calibri',lineSpacingMultiple:1.5});
ft(s,12);

// SLIDE 13: KIEM THU
s=pptx.addSlide(); bgL(s);
s.addText('Kiểm thử hệ thống',{x:0.6,y:0.9,w:5,h:0.4,fontSize:24,color:C.navy,fontFace:'Calibri',bold:true});
s.addShape(pptx.shapes.RECTANGLE,{x:0.6,y:1.35,w:1.2,h:0.04,fill:{color:C.orange}});
[{t:'Unit Testing',d:'Tính GPA, JWT, bcrypt, AI parse',c:C.blueMid},{t:'Integration',d:'API workflow, Circular Dep, SMTP',c:C.orange},{t:'Performance',d:'JMeter 100 user — 0% lỗi — <200ms',c:C.green},{t:'Security',d:'SQL Injection, bcrypt 10 rounds, CORS',c:C.red}].forEach((p,i)=>{
  const fx=0.6+(i%2)*6.2,fy=1.7+Math.floor(i/2)*2.4;
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:fx,y:fy,w:5.8,h:2.1,fill:{color:C.white},shadow:{type:'outer',blur:6,offset:2,color:'000000',opacity:0.06},line:{color:C.gray200,width:0.5},rectRadius:0.12});
  s.addShape(pptx.shapes.RECTANGLE,{x:fx,y:fy,w:5.8,h:0.05,fill:{color:p.c}});
  s.addText(p.t,{x:fx+0.2,y:fy+0.15,w:5.2,h:0.4,fontSize:15,color:p.c,fontFace:'Calibri',bold:true});
  s.addText(p.d,{x:fx+0.2,y:fy+0.65,w:5.2,h:1.2,fontSize:12,color:C.gray600,fontFace:'Calibri',lineSpacingMultiple:1.5});
});
ft(s,13);

// SLIDE 14: DEMO + SCREENSHOT
s=pptx.addSlide(); bgL(s);
s.addText('Demo trực tiếp',{x:0.6,y:0.9,w:5,h:0.4,fontSize:24,color:C.navy,fontFace:'Calibri',bold:true});
s.addShape(pptx.shapes.RECTANGLE,{x:0.6,y:1.35,w:1.2,h:0.04,fill:{color:C.orange}});
s.addImage({path:path.join(DIR,'00-landing.png'),x:0.6,y:1.7,w:5.8,h:3.5,type:'png',rounding:true});
s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:6.8,y:1.7,w:5.9,h:3.5,fill:{color:C.blueVLight},rectRadius:0.12});
s.addText('6 bước demo',{x:7.0,y:1.85,w:5.5,h:0.35,fontSize:15,color:C.navy,fontFace:'Calibri',bold:true});
s.addText('1. Đăng ký & Đăng nhập (JWT)\n2. Tạo task bằng AI (tiếng Việt)\n3. Kéo thả Kanban Board\n4. Pomodoro Timer 25/5\n5. Quản lý điểm số GPA\n6. Trò chuyện AI Coach',{x:7.0,y:2.3,w:5.5,h:2.5,fontSize:13,color:C.gray600,fontFace:'Calibri',lineSpacingMultiple:1.6});
s.addText('taskflow-frontend-4us2.onrender.com',{x:7.0,y:4.8,w:5.5,h:0.3,fontSize:11,color:C.blueMid,fontFace:'Calibri',align:'center',bold:true});
ft(s,14);

// SLIDE 15: SECTION 3
s=pptx.addSlide(); bgS(s);
s.addText('PHẦN 3',{x:1,y:2.0,w:4,h:0.5,fontSize:16,color:C.orange,fontFace:'Calibri',bold:true,letterSpacing:4});
s.addText('KẾT LUẬN\nVÀ KIẾN NGHỊ',{x:1,y:2.5,w:10,h:1.5,fontSize:42,color:C.white,fontFace:'Calibri',bold:true,lineSpacingMultiple:1.2});
s.addShape(pptx.shapes.RECTANGLE,{x:1,y:4.2,w:2.5,h:0.05,fill:{color:C.orange}});
s.addText('Kết quả đạt được và hướng phát triển',{x:1,y:4.4,w:8,h:0.5,fontSize:14,color:C.bluePale,fontFace:'Calibri',italic:true});

// SLIDE 16: KET LUAN + SCREENSHOT
s=pptx.addSlide(); bgL(s);
s.addText('Kết luận và Hướng phát triển',{x:0.6,y:0.9,w:5,h:0.4,fontSize:24,color:C.navy,fontFace:'Calibri',bold:true});
s.addShape(pptx.shapes.RECTANGLE,{x:0.6,y:1.35,w:1.2,h:0.04,fill:{color:C.orange}});
s.addImage({path:path.join(DIR,'01-dashboard.png'),x:0.6,y:1.7,w:5.8,h:4.0,type:'png',rounding:true});
s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:6.8,y:1.7,w:5.9,h:1.8,fill:{color:'F0FDF4'},rectRadius:0.12});
s.addText('Đã đạt được',{x:7.0,y:1.8,w:5.5,h:0.35,fontSize:14,color:C.green,fontFace:'Calibri',bold:true});
s.addText('✓ 15+ giao diện, 50+ API, 29 bảng CSDL\n✓ AI Gemini + Function Calling\n✓ Gamification XP/Level/Badge\n✓ Desktop + Mobile + APK\n✓ Cloud Deploy: Render + TiDB',{x:7.0,y:2.2,w:5.5,h:1.2,fontSize:11,color:C.gray600,fontFace:'Calibri',lineSpacingMultiple:1.4});
s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:6.8,y:3.7,w:5.9,h:1.8,fill:{color:C.blueVLight},rectRadius:0.12});
s.addText('Hướng phát triển',{x:7.0,y:3.8,w:5.5,h:0.35,fontSize:14,color:C.blueMid,fontFace:'Calibri',bold:true});
s.addText('→ Mobile native (Flutter/RN)\n→ Offline-first (Service Worker)\n→ Push notifications\n→ Microservices\n→ API mở (Swagger/OpenAPI)',{x:7.0,y:4.2,w:5.5,h:1.2,fontSize:11,color:C.gray600,fontFace:'Calibri',lineSpacingMultiple:1.4});
ft(s,16);

// SLIDE 17: CAM ON
s=pptx.addSlide(); bgC(s);
s.addText('🙏',{x:0,y:1.2,w:W,h:0.8,fontSize:48,align:'center'});
s.addText('XIN CẢM ƠN',{x:0,y:2.1,w:W,h:0.8,fontSize:44,color:C.white,fontFace:'Calibri',bold:true,align:'center'});
s.addText('HỘI ĐỒNG',{x:0,y:2.8,w:W,h:0.6,fontSize:30,color:C.orange,fontFace:'Calibri',bold:true,align:'center'});
s.addShape(pptx.shapes.RECTANGLE,{x:5.5,y:3.6,w:2.3,h:0.04,fill:{color:C.orange}});
s.addText('Em xin lắng nghe ý kiến đóng góp\ncủa các thầy cô',{x:2,y:3.8,w:9.3,h:0.8,fontSize:16,color:C.bluePale,fontFace:'Calibri',align:'center',italic:true,lineSpacingMultiple:1.4});
s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:3.5,y:5.0,w:6.3,h:0.8,fill:{color:C.white,transparency:90},line:{color:C.blueLight,width:0.75},rectRadius:0.1});
s.addText('LIỄU KIỆN AN — MSSV: 110122028',{x:3.5,y:5.0,w:6.3,h:0.4,fontSize:13,color:C.white,fontFace:'Calibri',bold:true,align:'center',valign:'middle'});
s.addText('Đại học Trà Vinh — Khoa KTCN — 2025',{x:3.5,y:5.4,w:6.3,h:0.3,fontSize:11,color:C.bluePale,fontFace:'Calibri',align:'center'});

// SAVE
const out='C:\\xampp\\htdocs\\khoaluan\\Bao-ve-do-an-TaskFlow.pptx';
pptx.writeFile({fileName:out}).then(()=>console.log('Done: '+out)).catch(e=>console.error('Error:',e));
