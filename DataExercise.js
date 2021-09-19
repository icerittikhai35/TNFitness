// Our product database.
const ExerciseBack = [
    {
        id: 1,
        name: "Deadlift",
        category: "Back",
        volume:12,
        round: 4,
        weight: 103,
        breaks: 60,
        equipment: "Barbell",
        Imageequipment: "https://bsg-i.nbxc.com/product/87/20/f3/7edae7f67d2ea2820fcb62f919.jpg",
        
        description:
            "เดดลิฟต์ (อังกฤษ: deadlift) คือการออกกำลังกายโดยใช้น้ำหนักโดยการถ่วงบาร์เบลล์หรือบาร์ ยกขึ้นเหนือพื้นในระดับสะโพก จากนั้นวางลงพื้น ถือเป็น 1 ใน 3 ของการยกน้ำหนัก ควบคู่ไปกับการสควอตและเบนช์เพรสส์",
        popular: true,
        imageUrls: "https://evofitness.at/wp-content/uploads/2019/03/EVO_Banner_March_14-1200x675.jpg",
        ibm: 30

    }, 
    {
        id: 2,
        name: "Dumbbell Row",
        category: "Back",
        volume: 12,
        round: 4,
        weight: 5,
        breaks: 66,
        equipment: "Dumbbell",
        Imageequipment: "https://www.technogym.com/media/catalog/product/cache/1/image/602f0fa2c1f0d1ba5e241f914e856ff9/d/u/dumbbellsracks_freeweights_hero.jpg",
        
        description:
            "เริ่มต้นเตรียมดัมเบล ยืนตัวตรง วางเท้าห่างกันประมาณหัวไหล่ ถือดัมเบลไว้ข้างลำตัวคว่ำมือทั้งสองข้างที่ถือดัมเบล แอ่นอก เอียงลำตัวไปข้างหน้า 45 องศา แนวกระดูกสันหลังเป็นแนวตรง ให้กล้ามเนื้อหลังถูกเหยียดจนสุด จากนั้นออกแรงเกร็งกล้ามเนื้อหลัง เพื่อดึงดัมเบลขึ้น แล้วลดดัมเบลลงช้าๆ เพื่อกลับสู่ท่าเตรียม",
        popular: true,
        imageUrls: "https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/11/one-arm-dumbbell-row.jpg",
        ibm: 30
    },
    {
        id: 3,
        name: "Dack Extension",
        category: "Back",
        volume: 12,
        round: 4,
        weight: 5,
        breaks: 60,
        equipment: "Back Extension",
        Imageequipment: "https://cf.shopee.co.th/file/42c4d23064d99d35601ae7647815ed96",
        
        description:
            "เริ่มต้นจากการนอนลงบนเบาะที่มีเบาะ โดยยันขาทั้งสองข้างติดพื้นใต้ที่ล็อกข้อเท้า ให้ลำตัวช่วงสะโพกวางเหนือเบาะเป็นแนวเส้นตรง ใช้มือทั้งสองข้างพาดไขว้ระหว่างอก จากนั้นค่อยๆลดลำตัวช่วงบนลงจนสุด จากนั้นค่อยๆออกแรงเกร็งกล้ามเนื้อหลังล่าง เพื่อยกลำตัวขึ้นดังเดิม ทำเช่นนี้จนครบ 10 -12 ครั้ง",
        popular: true,
        imageUrls: "https://cdn2.coachmag.co.uk/sites/coachmag/files/2019/06/back-hyperextension.jpg",
        ibm: 30

    },
    {
        id: 4,
        name: "Dunbbell Upright Row",
        category: "Back",
        volume: 12,
        round: 4,
        weight: 5,
        breaks: 60,
        equipment: "Dunbbell",
        Imageequipment: "https://www.technogym.com/media/catalog/product/cache/1/image/602f0fa2c1f0d1ba5e241f914e856ff9/d/u/dumbbellsracks_freeweights_hero.jpg",
        
        description:
            "ขั้นแรกใช้มือจับดัมเบลแบบคว่ำมือ ไว้บริเวณหน้าต้นขา ระยะแคบกว่าไหล่ งอข้อศอกเล็กน้อย ลำตัวตรง ยกดัมเบลขึ้นแทงศอกออกด้านข้างในแนวดิ่งแนบลำตัว โฟกัสที่กล้ามเนื้อหลังและบ่า ดึงขึ้นมาจนใกล้ปลายคาง ค้างไว้ 2 วินาที แล้วลดดัมเบลลงช้าๆ กลับทิศทางเดิมสู่ท่าเริ่มต้น จากนั้นทำซ้ำๆ จนครบ 10-12 ครั้ง",
        popular: true,
        imageUrls: "http://fullscalefit.com/wp-content/uploads/2017/09/17.2-Upright-Row-Execution-Full-Scale-Fitness-personal-trainer-in-akron-near-me-cleveland-sculpt-fit-body-toning-nutrition-1024x683.jpg",
        ibm: 30
    },
    {
        id: 5,
        name: "T-Bar Row",
        category: "Back",
        volume: 12,
        round: 4,
        weight: 5,
        breaks: 60,
        equipment: "Bar Bell",
        Imageequipment: "https://bsg-i.nbxc.com/product/87/20/f3/7edae7f67d2ea2820fcb62f919.jpg",
        
        description:
            "การฝึกด้วยท่า T-Bar Row เริ่มต้นจากการ ปักด้านปลายด้านใดด้านหนึ่งของบาร์เบลเข้าหามุมห้อง จากนั้นใช้ด้ามจับรูปตัว V มาคล้องไว้ด้านล่างของอีกฝั่งของบาร์เบล ยืนคร่อมบาร์เบล ตัวตรง เท้าทั้งสองข้างวางห่างกันประมาณหัวไหล่ คว่ำมือทั้งสองลงจับด้ามจับ ในลักษณะหันฝ่ามือเข้าหากัน แอ่นอก แล้วเอียงลำตัว มาทางด้านหน้าทำมุมประมาณ 45 องศา กับแนวพื้นโลก พร้อมกับหย่อนสะโพกออกไปทางด้านหลัง โดยให้รักษาแนวของกระดูกสันหลังให้เป็นแนวตรง ปล่อยแขนลงมาตามธรรมชาติ ให้กล้ามเนื้อหลังถูกเหยียดจนสุด เป็นท่าเตรียมฝึกท่า T-Bar Row",
        popular: true,
        imageUrls: "https://planforfit.com/wp-content/uploads/2015/06/t-bar-row-finish-1.jpg",
        ibm: 30
    },
    {
        id: 6,
        name: "Lat Pulldown",
        category: "Back",
        volume: 12,
        round: 4,
        weight: 5,
        breaks: 60,
        equipment: "Machine",
        Imageequipment: "https://planforfit.com/wp-content/uploads/2016/09/v-grip-seated-row-finish.jpg",
        
        
        description:
            "การฝึกด้วยท่า Wide-Grip Lat Pulldown เริ่มต้นจากการคว่ำมือทั้งสองข้างลง จับบาร์ด้วยความกว้างที่กว้างกว่าหัวไหล่ประมาณครึ่งศอก จากนั้นนั่งลงบนเบาะของเครื่อง Cable Pulldown พยายามล็อกขากับเบาะรองไว้ให้แน่น ปล่อยให้กล้ามเนื้อหลังถูกเหยียดออกจนสุด ไปตามแรงของเคเบิ้ล เป็นท่าเตรียมฝึกท่า Wide-Grip Lat Pulldown",
        popular: true,
        imageUrls: "https://planforfit.com/wp-content/uploads/2015/07/wide-grip-lat-pulldown-finish-resize1.jpg",
        ibm: 30
    },
    {
        id: 7,
        name: "Seated cable row",
        category: "Back",
        volume: 12,
        round: 4,
        weight: 5,
        breaks: 60,
        equipment: "Machine",
        Imageequipment: "https://m.media-amazon.com/images/I/51OqWxXltmL._SL1190_.jpg",
                
        description:
            "การฝึกด้วยท่า  Seated Row เริ่มต้นจากการนั่งลงบนเบาะ ใช้มือทั้งสองข้างจับด้ามจับ ในลักษณะหันฝ่ามือเข้าหากัน จากนั้นใช้เท้าถีบแป้น เพื่อดันลำตัวออกมา จนอยู่ในตำแหน่งที่ กล้ามเนื้อหลังถูกเหยียดตัวจนสุด นั่งหลังตรง แอ่นอก เป็นท่าเตรียมฝึกท่า  Seated Row",
        popular: true,
        imageUrls: "https://planforfit.com/wp-content/uploads/2016/09/v-grip-seated-row-finish.jpg",
        ibm: 30
    },


];
const ExerciseChest = [
    {
        id: 11,
        name: "Dunbbell Upright Row",
        category: "Chest",
        volume: 12,
        round: 4,
        weight: 5,
        breaks: 60,
        equipment: "Barbbell",
        Imageequipment: "https://bsg-i.nbxc.com/product/87/20/f3/7edae7f67d2ea2820fcb62f919.jpg",
        
        description:
            "หลังจากนอนบนเก้าอี้ออกกำลังเรียบร้อยแล้ว ให้หนุ่ม ๆ จับบาร์เบลที่ความกว้างระดับหัวไหล่ ยืดอกไว้ จากนั้นยกบาร์เบลลงมาโดยทิ้งข้อศอกให้ลงมาต่ำกว่าหัวไหล่เล็กน้อย โดยเวลาใช้แรงให้หายใจออก ผ่อนแรงหายใจเข้าทำควบคู่กันไป ขณะที่โฟกัสไปที่หน้าอกเป็นตัวดันบาร์เบลขึ้นมา จังหวะการเล่น (3-2-2-1) ทำ 10-15 ครั้งต่อเซต ทำทั้งหมด 3-4 เซต",
        popular: true,
        imageUrls: "https://img.kapook.com/u/thachapol/a999999999999999999999999999/v1232.jpg",
        ibm: 30
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
const dataForback = [
    {
        back: ExerciseBack.map((item, i) => {
            return {
                name: item.name,
                volume: item.volume,
                round: item.round,
                weight: item.weight,
                breaks: item.breaks,
                imageUrls: item.imageUrls,

            };
        })
    }
];

export { ExerciseChest, ExerciseBack, categories, dataForback };
