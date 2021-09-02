// Our product database.
const Exercise = [
    {
        id: 1,
        name: "Deadlift",
        category: "Back",
        volume: 12,
        round: 4,
        weight: 5,
        break: 60,
        equipment: "Barbell",
        Imageequipment: "./assets/splash.png",
        break: 55,
        description:
            "เดดลิฟต์ (อังกฤษ: deadlift) คือการออกกำลังกายโดยใช้น้ำหนักโดยการถ่วงบาร์เบลล์หรือบาร์ ยกขึ้นเหนือพื้นในระดับสะโพก จากนั้นวางลงพื้น ถือเป็น 1 ใน 3 ของการยกน้ำหนัก ควบคู่ไปกับการสควอตและเบนช์เพรสส์",
        popular: true,
        imageUrls:  "https://evofitness.at/wp-content/uploads/2019/03/EVO_Banner_March_14-1200x675.jpg",
        
    },
    {
        id: 2,
        name: "Dumbbell Row",
        category: "Back",
        volume: 12,
        round: 4,
        weight: 5,
        break: 60,
        equipment: "Dumbbell",
        Imageequipment: "./assets/splash.png",
        break: 55,
        description:
            "เริ่มต้นเตรียมดัมเบล ยืนตัวตรง วางเท้าห่างกันประมาณหัวไหล่ ถือดัมเบลไว้ข้างลำตัวคว่ำมือทั้งสองข้างที่ถือดัมเบล แอ่นอก เอียงลำตัวไปข้างหน้า 45 องศา แนวกระดูกสันหลังเป็นแนวตรง ให้กล้ามเนื้อหลังถูกเหยียดจนสุด จากนั้นออกแรงเกร็งกล้ามเนื้อหลัง เพื่อดึงดัมเบลขึ้น แล้วลดดัมเบลลงช้าๆ เพื่อกลับสู่ท่าเตรียม",
        popular: true,
        imageUrls:"https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/11/one-arm-dumbbell-row.jpg",
       
    },
    {
        id: 3,
        name: "Dack Extension",
        category: "Back",
        volume: 12,
        round: 4,
        weight: 5,
        break: 60,
        equipment: "Back Extension",
        Imageequipment: "./assets/splash.png",
        break: 55,
        description:
            "เริ่มต้นจากการนอนลงบนเบาะที่มีเบาะ โดยยันขาทั้งสองข้างติดพื้นใต้ที่ล็อกข้อเท้า ให้ลำตัวช่วงสะโพกวางเหนือเบาะเป็นแนวเส้นตรง ใช้มือทั้งสองข้างพาดไขว้ระหว่างอก จากนั้นค่อยๆลดลำตัวช่วงบนลงจนสุด จากนั้นค่อยๆออกแรงเกร็งกล้ามเนื้อหลังล่าง เพื่อยกลำตัวขึ้นดังเดิม ทำเช่นนี้จนครบ 10 -12 ครั้ง",
        popular: true,
        imageUrls: "https://cdn2.coachmag.co.uk/sites/coachmag/files/2019/06/back-hyperextension.jpg",
        
    },
    {
        id: 4,
        name: "Dunbbell Upright Row",
        category: "Back",
        volume: 12,
        round: 4,
        weight: 5,
        break: 60,
        equipment: "Dunbbell",
        Imageequipment: "./assets/splash.png",
        break: 55,
        description:
            "ขั้นแรกใช้มือจับดัมเบลแบบคว่ำมือ ไว้บริเวณหน้าต้นขา ระยะแคบกว่าไหล่ งอข้อศอกเล็กน้อย ลำตัวตรง ยกดัมเบลขึ้นแทงศอกออกด้านข้างในแนวดิ่งแนบลำตัว โฟกัสที่กล้ามเนื้อหลังและบ่า ดึงขึ้นมาจนใกล้ปลายคาง ค้างไว้ 2 วินาที แล้วลดดัมเบลลงช้าๆ กลับทิศทางเดิมสู่ท่าเริ่มต้น จากนั้นทำซ้ำๆ จนครบ 10-12 ครั้ง",
        popular: true,
        imageUrls: "http://fullscalefit.com/wp-content/uploads/2017/09/17.2-Upright-Row-Execution-Full-Scale-Fitness-personal-trainer-in-akron-near-me-cleveland-sculpt-fit-body-toning-nutrition-1024x683.jpg",

    },
    
];

// List of item categories.
const categories = [
    {
        name: "All categories",
        icon: "list"
    },
    {
        name: "Shoes for Heathy",
        icon: ""
    },
    {
        name: "Best for men",
        icon: ""
    },
    {
        name: "Best for girl",
        icon: ""
    },
    {
        name: "Sole technology",
        icon: ""
    },
    {
        name: "Durability",
        icon: ""
    }
];

// Data for rendering menu.
const dataForTheMenu = [
    { name: "Home page", url: "/", icon: "home", id: 0 },
    {
        name: "Product categories",
        id: 1,
        children: categories.map((x, i) => {
            return {
                name: x.name,
                id: i,
                url: "/?category=" + x.name,
                icon: x.icon
            };
        })
    }
];

export { Exercise, categories, dataForTheMenu };
