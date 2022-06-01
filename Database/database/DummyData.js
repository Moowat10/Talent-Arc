export default async function DummyData(Database) {
  
  await Database.Roles.create({
    name: "Owner",
  });
  await Database.Roles.create({
    name: "Manager",
  });
   await Database.Roles.create({
    name: "Cashier",
  });
  await Database.Roles.create({
    name: "Barber",
  });
  await Database.Roles.create({
    name: "SpaExpert",
  });

   await Database.Department.create({
    name: "Owners"
  });
  await Database.Department.create({
    name: "Elite Spa"
  });
  await Database.Department.create({
    name: "Kasr ElShabab"
  });
  await Database.Department.create({
    name: "Cafe"
  });

  await Database.Employees.create({
    firstName: "Kareem",
    lastName: "Owner",
    userName: "kareem",
    mobile: "11000000001",
    dateOfBirth: null,
    password: "$31$16$za5RqyQzwpKKidRinGDTnR-r1vBhI_3xLhtcB69HVF4", //kasrpall3tk
    isActive: false,
    roleId: 1,
    departmentId: 1
  });
  await Database.Employees.create({
    firstName: "Cashier",
    lastName: "1",
    userName: "cashier1",
    mobile: "32000000002",
    dateOfBirth: null,
    password: "$31$16$_jEK9NjhCXvYZAbO1dlQhqIKuOgvArO-LjCcOJPXJik", //12123434
    isActive: false,
    roleId: 3,
    departmentId: 2,
  });
   await Database.Employees.create({
    firstName: "Cashier",
    lastName: "2",
    userName: "cashier2",
    mobile: "33000000003",
    dateOfBirth: null,
    password: "$31$16$CGuP3uIbgK47ummcmQCqNX-zp5zEg-8JHT57cfxUs9s", //12341234
    isActive: false,
    roleId: 3,
    departmentId: 3,
  });
 await Database.Employees.create({
    firstName: "Elite Men",
    lastName: "Manager",
    userName: "manager1",
    mobile: "23000000004",
    dateOfBirth: null,
    password: "$31$16$cZYPoypAmTF7ndbs996sa3_OAWwD79j9M0VmQjqd5a0", //14321432
    isActive: false,
    roleId: 2,
    departmentId: 3,
  });
  await Database.Employees.create({
    firstName: "Elite Women",
    lastName: "Manager",
    userName: "manager2",
    mobile: "22000000005",
    dateOfBirth: null,
    password: "$31$16$D0SQOpIGkTbPrK-MLAnJde6NgHB038GBP-gvgex32Ak", //11223434
    isActive: false,
    roleId: 2,
    departmentId: 2,
  });
    await Database.Employees.create({
    firstName: "Cafe",
    lastName: "Manager",
    userName: "manager3",
    mobile: "24000000006",
    dateOfBirth: null,
    password: "$31$16$3E9lwWzJUFDt-OQg_oqq217-MSsYoENj9K4kj7ZYeis", //13413412
    isActive: false,
    roleId: 2,
    departmentId: 4,
  });
  await Database.Employees.create({
    firstName: "Zizo",
    lastName: "Manager",
    userName: "zizo",
    mobile: "22000000007",
    dateOfBirth: null,
    password: "$31$16$4mikW1kQvMy_mmliqyWyNAbkzK97moQaSWYZsDpjzKk", //98769876
    isActive: false,
    roleId: 2,
    departmentId: 2,
  });
  await Database.Employees.create({
    firstName: "Cafe",
    lastName: "Discount",
    userName: "cafediscount",
    mobile: "24000000008",
    dateOfBirth: null,
    password: "$31$16$qRpHjufaS9Peo2h0jXnGbPWaCZ8yy6E7IXdTSJdKSeU", //96879687
    isActive: false,
    roleId: 2,
    departmentId: 4,
  });

  await Database.Employees.create({
    firstName: "Chair",
    lastName: "1",
    userName: "chair1",
    mobile: "43000000009",
    dateOfBirth: null,
    password: "$31$16$pS5StZYJs75XXJNfWYNqw3-Sl74uN7i3x6UBBmVCXac", //89218921
    isActive: false,
    roleId: 4,
    departmentId: 3,
  });
   await Database.Employees.create({
    firstName: "Chair",
    lastName: "2",
    userName: "chair2",
    mobile: "43000000010",
    dateOfBirth: null,
    password: "$31$16$kFO2d0JautJdpXhDhNf3U6mEAAi4fzwSx2yNheaHgOE", //88778877
    isActive: false,
    roleId: 4,
    departmentId: 3,
  });
   await Database.Employees.create({
    firstName: "Chair",
    lastName: "3",
    userName: "chair3",
    mobile: "43000000011",
    dateOfBirth: null,
    password: "$31$16$Dk84XBL632lbkCGejufsauQ-h5-a0tICPA7NOAYzWqE", //99889988
    isActive: false,
    roleId: 4,
    departmentId: 3,
  });
   await Database.Employees.create({
    firstName: "Chair",
    lastName: "4",
    userName: "chair4",
    mobile: "43000000012",
    dateOfBirth: null,
    password: "$31$16$CwhaFzOwlJIo2q2hwBko7332Z1J-OaAImblXNtGuzfI", //44664466
    isActive: false,
    roleId: 4,
    departmentId: 3,
  });
   await Database.Employees.create({
    firstName: "Chair",
    lastName: "5",
    userName: "chair5",
    mobile: "43000000013",
    dateOfBirth: null,
    password: "$31$16$ueSasuzVlFFgYGo7CYrQ8vPqx-OMTwpxYpbDGzMK9SQ", //77667766
    isActive: false,
    roleId: 4,
    departmentId: 3,
  });
   await Database.Employees.create({
    firstName: "Chair",
    lastName: "6",
    userName: "chair6",
    mobile: "43000000014",
    dateOfBirth: null,
    password: "$31$16$DtmbB0UqDKFQHVXAzB2dy4eK1WTcAo2wSEgZHnhnEOQ", //22332233
    isActive: false,
    roleId: 4,
    departmentId: 3,
  });
    await Database.Employees.create({
    firstName: "Chair",
    lastName: "7",
    userName: "chair7",
    mobile: "43000000015",
    dateOfBirth: null,
    password: "$31$16$D8oeDeEC0nVYJmOsr14u6FMN-em03UR3yt_mPtwTVlI", //89898989
    isActive: false,
    roleId: 4,
    departmentId: 3,
  });
   await Database.Employees.create({
    firstName: "Chair",
    lastName: "8",
    userName: "chair8",
    mobile: "43000000016",
    dateOfBirth: null,
    password: "$31$16$uTfdgTnhK5PMrYwdPtNggpx28ppT9CPq01Fan2JwqC4", //57575757
    isActive: false,
    roleId: 4,
    departmentId: 3,
  });
   await Database.Employees.create({
    firstName: "Chair",
    lastName: "9",
    userName: "chair9",
    mobile: "43000000017",
    dateOfBirth: null,
    password: "$31$16$8Gf0VQxgTHIuhpa3BdWjvIaaH19nP_Ws2Xz17ylwn9A", //78787878
    isActive: false,
    roleId: 4,
    departmentId: 3,
  });
   await Database.Employees.create({
    firstName: "Chair",
    lastName: "10",
    userName: "chair10",
    mobile: "43000000018",
    dateOfBirth: null,
    password: "$31$16$RY0q1a63FUTvXpcOqC9j3Qce_7Fc63zAlr8X0EDSe-o", //55665566
    isActive: false,
    roleId: 4,
    departmentId: 3,
  });

  await Database.Employees.create({
    firstName: "Spa",
    lastName: "1",
    userName: "spa1",
    mobile: "52000000019",
    dateOfBirth: null,
    password: "$31$16$OgIpMzMKPej9xqgIDTud2Bnei3IIUPvZ_tnUBHgHpYg", //11999911
    isActive: false,
    roleId: 5,
    departmentId: 2,
  });
   await Database.Employees.create({
    firstName: "Spa",
    lastName: "2",
    userName: "spa2",
    mobile: "52000000020",
    dateOfBirth: null,
    password: "$31$16$eT72nfSDOivn_Y-QWUIUcMYc0I2fkVhDdTUleBTV9Y0", //33888833
    isActive: false,
    roleId: 5,
    departmentId: 2,
  });
   await Database.Employees.create({
    firstName: "Spa",
    lastName: "3",
    userName: "spa3",
    mobile: "52000000021",
    dateOfBirth: null,
    password: "$31$16$GJ-JxUjYJqYUq3gK7kPpBtGd-S40OaP5cpBO4q9D9hA", //66777766
    isActive: false,
    roleId: 5,
    departmentId: 2,
  });
   await Database.Employees.create({
    firstName: "Spa",
    lastName: "4",
    userName: "spa4",
    mobile: "52000000022",
    dateOfBirth: null,
    password: "$31$16$g-88czXk3Jszr3-hY6VTY6qlpxCu_FFEsWZresXhyfY", //56325632
    isActive: false,
    roleId: 5,
    departmentId: 2,
  });
   await Database.Employees.create({
    firstName: "Spa",
    lastName: "5",
    userName: "spa5",
    mobile: "52000000023",
    dateOfBirth: null,
    password: "$31$16$-eoktkuMI77HZufg45lU9v8HcZCjuwJp-0OmedIBIOo", //45674567
    isActive: false,
    roleId: 5,
    departmentId: 2,
  });
   await Database.Employees.create({
    firstName: "Spa",
    lastName: "6",
    userName: "spa6",
    mobile: "52000000024",
    dateOfBirth: null,
    password: "$31$16$NllB8z7UctVzWz6rjXebsshHPiIFwBcRCddiWcVn9sg", //90909090
    isActive: false,
    roleId: 5,
    departmentId: 2,
  });
    await Database.Employees.create({
    firstName: "Spa",
    lastName: "7",
    userName: "spa7",
    mobile: "52000000025",
    dateOfBirth: null,
    password: "$31$16$Ofcqlvq3i7G-MM-3YlcppKvQkUUehiW-P-8RBF31g4s", //67986798
    isActive: false,
    roleId: 5,
    departmentId: 2,
  });
   await Database.Employees.create({
    firstName: "Spa",
    lastName: "8",
    userName: "spa8",
    mobile: "52000000026",
    dateOfBirth: null,
    password: "$31$16$3xFlg9TiCmwT49JlF1LhaqBm8X-CYkgGWEBgFrbDrbE", //44555544
    isActive: false,
    roleId: 5,
    departmentId: 2,
  });
   await Database.Employees.create({
    firstName: "Spa",
    lastName: "9",
    userName: "spa9",
    mobile: "52000000027",
    dateOfBirth: null,
    password: "$31$16$EAy-THo5xNxGicgyst5V8wo0TU1s9Xi7bFmtU1hk9lk", //33233323
    isActive: false,
    roleId: 5,
    departmentId: 2,
  });
   await Database.Employees.create({
    firstName: "Spa",
    lastName: "10",
    userName: "spa10",
    mobile: "52000000028",
    dateOfBirth: null,
    password: "$31$16$3VsTLVqWWxq8wNFeB9Ag2lNUhbK2LG2L9lLYNblElwU", //56675667
    isActive: false,
    roleId: 5,
    departmentId: 2,
  });
  await Database.Customers.create({
    firstName: "Guest",
    lastName: "",
    mobile: "00000000000",
    dateOfBirth: "",
    isMarried: false
  });
  await Database.Customers.create({
    firstName: "Kareem",
    lastName: "Owner",
    mobile: "11000000001",
    dateOfBirth: "",
   isMarried: false
  });
  await Database.Customers.create({
    firstName: "Cashier",
    lastName: "1",
    mobile: "32000000002",
    dateOfBirth: "",
  });
   await Database.Customers.create({
    firstName: "Cashier",
    lastName: "2",
    mobile: "33000000003",
    dateOfBirth: "",
  });
 await Database.Customers.create({
    firstName: "Elite Men",
    lastName: "Manager",
    mobile: "23000000004",
    dateOfBirth: "",
  });
  await Database.Customers.create({
    firstName: "Elite Women",
    lastName: "Manager",
    mobile: "22000000005",
    dateOfBirth: "",
  });
    await Database.Customers.create({
    firstName: "Cafe",
    lastName: "Manager",
    mobile: "24000000006",
    dateOfBirth: "",
  });
  await Database.Customers.create({
    firstName: "Zizo",
    lastName: "Manager",
    mobile: "22000000007",
    dateOfBirth: "",
  });
  await Database.Customers.create({
    firstName: "Cafe",
    lastName: "Discount",
    mobile: "24000000008",
    dateOfBirth: "",

  });

  await Database.Customers.create({
    firstName: "Chair",
    lastName: "1",
    mobile: "43000000009",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Chair",
    lastName: "2",
    mobile: "43000000010",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Chair",
    lastName: "3",
    mobile: "43000000011",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Chair",
    lastName: "4",
    mobile: "43000000012",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Chair",
    lastName: "5",
    mobile: "43000000013",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Chair",
    lastName: "6",
    mobile: "43000000014",
    dateOfBirth: "",
    
  });
    await Database.Customers.create({
    firstName: "Chair",
    lastName: "7",
    mobile: "43000000015",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Chair",
    lastName: "8",
    mobile: "43000000016",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Chair",
    lastName: "9",
    mobile: "43000000017",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Chair",
    lastName: "10",
    mobile: "43000000018",
    dateOfBirth: "",
    
  });

  await Database.Customers.create({
    firstName: "Spa",
    lastName: "1",
    mobile: "52000000019",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Spa",
    lastName: "2",
    mobile: "52000000020",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Spa",
    lastName: "3",
    mobile: "52000000021",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Spa",
    lastName: "4",
    mobile: "52000000022",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Spa",
    lastName: "5",
    mobile: "52000000023",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Spa",
    lastName: "6",
    mobile: "52000000024",
    dateOfBirth: "",
    
  });
    await Database.Customers.create({
    firstName: "Spa",
    lastName: "7",
    mobile: "52000000025",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Spa",
    lastName: "8",
    mobile: "52000000026",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Spa",
    lastName: "9",
    mobile: "52000000027",
    dateOfBirth: "",
    
  });
   await Database.Customers.create({
    firstName: "Spa",
    lastName: "10",
    mobile: "52000000028",
    dateOfBirth: "",  
  });
  await Database.Categories.create({
    name: "Sha3r",
    isService: true,
    departmentId: 3
  });
    await Database.Categories.create({
    name: "Regl",
    isService: true,
    departmentId: 2
  });
    await Database.Categories.create({
    name: "Cream",
    isService: false,
    departmentId: 2
  });
    await Database.Categories.create({
    name: "Food",
    isService: false,
    departmentId: 4
  });
    await Database.Products.create({
      name: "One",
      description: "",
      categoryId: 3,
      barcode: "5746456",
      quantity: 20,
      price: 10,
    });
    await Database.Products.create({
      name: "Chipsy",
      description: "",
      categoryId: 4,
      barcode: "4646345",
      quantity: 20,
      price: 5,
    });
    await Database.Services.create({
      name: "Shaving",
       categoryId: 1,
      price: 200,
      empPrice: 20,
    });
    await Database.Services.create({
      name: "Sawna",
       categoryId: 2,
      price: 1000,
      empPrice: 40,
    });
  
}