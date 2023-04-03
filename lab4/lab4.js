class sinhVien {
    constructor(
      id,
      first_name,
      middle_name,
      last_name,
      email,
      phone_number,
      dob
    ) {
      this.id = id;
      this.first_name = first_name;
      this.middle_name = middle_name;
      this.last_name = last_name;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = new Date(dob);
    }
  
    getFullname() {
      return this.first_name + " " + this.middle_name + " " + this.last_name;
    }
    gettheoNam() {
      const today = new Date();
      let tuoi = today.getFullYear() - this.dob.getFullYear();
      return tuoi;
    }
    getTheongay() {
      const today = new Date();
      let tuoi = today.getFullYear() - this.dob.getFullYear();
      return tuoi * 12 * 30 + 82;
    }
  }
  
  const listSinvien = [
    new sinhVien(
      1,
      "Phan",
      "Thanh",
      "Trung",
      "Trung@gmail.com",
      "123456789",
      "05-04=2004"
    ),
    new sinhVien(
      2,
      "Phan",
      "Thanh",
      "Tài",
      "Tai@gmail.com",
      "987654321",
      "04-3-2004"
    ),
    new sinhVien(
      3,
      "Nguyễn ",
      "LÊ",
      "Duy",
      "Duy@gmail.com",
      "555555555",
      "2004-05-05"
    ),
    new sinhVien(
      4,
      "Phạm ",
      "văn",
      "Tiến",
      "Tien@gmail.com",
      "111111191",
      "05-03-2004"
    ),
    new sinhVien(
      5,
      "Cao",
      "Minh",
      "Toàn",
      "Toan@gmail.com",
      "222222222",
      "11-11-2003"
    ),
  ];
  
  listSinvien.sort((a, b) => a.getTheongay() - b.getTheongay());
  
  listSinvien.forEach((sinhVien) => {
    console.log(
      sinhVien.getFullname() +
        " " +
        sinhVien.gettheoNam() +
        " " +
        "Tuổi " +
        " " +
        sinhVien.getTheongay() +
        " " +
        "ngày tuổi"
    );
  });
  console.log("Thông tin màng hình:${window.screen.width}x${window.screen.height}");