import Footer from "../components/Reusble/Footer";
import NavbarTrue from "../components/Reusble/NavbarTrue";
import {
	CheckCircleFill,
	EyeFill,
	PatchCheckFill,
	Gem,
	PersonSquare,
	ExclamationDiamondFill,
	XCircleFill,
	EyeSlashFill,
} from "react-bootstrap-icons";
import img_avatar from "../assets/img/avatar.png";
import PointToCash from "../components/Profile/PointToCashModal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Profile() {
	const [ view, setView] = useState(false)
	const navigate = useNavigate()
	return (
    <>
      <NavbarTrue />
      <div
        className="d-flex justify-content-between"
        style={{ backgroundColor: "	rgb(192,192,192,0.2)" }}
      >
        <div className="font-roboto fw-700 px-5 py-4" style={{ fontSize: 32 }}>
          Profile
        </div>
        <div className="text-muted px-5 py-4" style={{ fontSize: 32 }}>
          <PersonSquare />
        </div>
      </div>
      <div className="container-fluid" style={{ padding: "24px 72px 0px" }}>
        <div className="row p-5">
          <div className="row mt-4">
            <div className="pe-4 h-100">
              <div className="row d-flex justify-content-between">
                <div className="col-4">
                  <div className=" row d-flex">
                    <div className=" col-3 d-flex justify-content-center align-items-center">
                      <img src={img_avatar} className="img-fluid" alt="" />
                    </div>
                    <div className="col">
                      <div
                        className="font-inter text-info fw-600 my-2"
                        style={{ fontSize: 32 }}
                      >
                        <span className="text-dark me-2">hidayat</span>
                        <PatchCheckFill />
                      </div>
                      <div className="font-inter fw-600 fs-14 text-success rounded d-flex align-items-center">
                        <div
                          className="px-2"
                          style={{
                            backgroundColor: "	rgb(192,192,192,0.2)",
                          }}
                        >
                          <span className="me-2">
                            Akun Anda telah Diverifikasi
                          </span>
                          <CheckCircleFill />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="text-end">
                    <div className="text-muted" style={{ fontSize: 32 }}>
                      {view ? (
                        <EyeFill onClick={() => setView(false)} />
                      ) : (
                        <EyeSlashFill onClick={() => setView(true)} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Username */}
          <div className="row mt-5">
            <div className="col">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Username
              </div>

              <div className="font-inter fw-400 fs-14 ">
                Identitas Anda untuk login dan riwayat transaksi
              </div>
            </div>
            <div className="col-4">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                @four_five3523
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="row mt-4">
            <div className="col">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Email
              </div>

              <div className="font-inter fw-400 fs-14 ">
                Untuk login, penarikan, mengambil kata sandi, perubahan
                pengaturan keamanan dan manajemen API.
              </div>
            </div>
            <div className="col-4">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                <div className="">
                  <CheckCircleFill className="text-success" />
                  {view ? (
                    <span className="ms-2">hidayat_four@gmail.com</span>
                  ) : (
                    <span className="ms-2">hida**@gmail.com</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Contact */}
          <div className="row mt-4">
            <div className="col">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Kontak
              </div>

              <div className="font-inter fw-400 fs-14 ">
                Untuk login, penarikan, mengambil kata sandi, perubahan
                pengaturan keamanan dan manajemen API.
              </div>
            </div>
            <div className="col-4">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                <div className="">
                  <CheckCircleFill className="text-success" />
                  {view ? (
                    <span className="ms-2">+6282145871234</span>
                  ) : (
                    <span className="ms-2">+628214587****</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Point */}
          <div className="row mt-4">
            <div className="col">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Total Point : 150{" "}
                <span className="px-1 fw-bold text-warning">
                  <Gem />
                </span>
              </div>

              <div className="font-inter fw-400 fs-14 ">
                Point bisa digunakan atau di redeem cash out ke rekening Anda
              </div>
            </div>
            <div className="col-4">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                <div
                  className="btn btn-sm btn-primary px-4"
                  data-bs-toggle="modal"
                  data-bs-target="#PointToCash"
                >
                  Point to Cash Out
                </div>
              </div>
            </div>
          </div>
          <hr style={{ margin: "100px 0px" }} />
          <div className="row">
            <div className="col">
              <div className="font-roboto fw-700" style={{ fontSize: 32 }}>
                {" "}
                Data Pribadi
              </div>
            </div>
            <div className="col-2 d-flex align-items-center">
              <div
                className="btn btn-sm btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#ChangeProfile"
              >
                ubah
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Tempat Kelahiran
              </div>
              <div className="font-inter fw-400 fs-16">Tanjung Pinang</div>
            </div>
            <div className="col">
              <div className="col-3">
                <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                  Alamat
                </div>
                <div className="font-inter fw-400 fs-16">
                  Jl. Kemanggisan Ilir 3
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Tanggal Lahir
              </div>
              <div className="font-inter fw-400 fs-16">14-05-1989</div>
            </div>
            <div className="col">
              <div className="col-3">
                <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                  Provinsi
                </div>
                <div className="font-inter fw-400 fs-16">DKI Jakarta</div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Jenis Kelamin
              </div>
              <div className="font-inter fw-400 fs-16">Laki -Laki </div>
            </div>
            <div className="col">
              <div className="col-3">
                <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                  Kota
                </div>
                <div className="font-inter fw-400 fs-16">
                  KOTA ADM JAKARTA BARAT
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Kewarganegaraan
              </div>
              <div className="font-inter fw-400 fs-16">Indonesia</div>
            </div>
            <div className="col">
              <div className="col-3">
                <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                  Kode Pos
                </div>
                <div className="font-inter fw-400 fs-16">174857</div>
              </div>
            </div>
          </div>
          <hr style={{ margin: "100px 0px" }} />
          <div className="row">
            <div className="col">
              <div className="font-roboto fw-700" style={{ fontSize: 32 }}>
                {" "}
                Kontak darurat
              </div>
            </div>
            <div className="col-2 d-flex align-items-center">
              <div
                className="btn btn-sm btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#ChangeProfile"
              >
                ubah
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Nama
              </div>
              <div className="font-inter fw-400 fs-16">Anissa Azahraa</div>
            </div>
            <div className="col">
              <div className="col-3">
                <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                  Nomor telepon
                </div>
                <div className="font-inter fw-400 fs-16">+62854-7858-545</div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="font-roboto fw-700" style={{ fontSize: 32 }}>
                {" "}
                Aktivitas Akun
              </div>
            </div>
            <div className="col-2 d-flex align-items-center">
              <div
                className="btn btn-sm btn-secondary"
                onClick={() => navigate("/account-activity")}
              >
                detail
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="font-inter fw-400 fs-16">
                Login Terakhir : 02-02-2023 14:26:21
              </div>
              <div className="font-inter fw-400 fs-16 mt-2">
                Aktivitas akun yang mencurigakan?
                <span className="text-primary"> Nonaktifkan Akun?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ padding: "24px 72px 0px" }}>
        <div className="row p-5">
          <div className="row mt-4">
            <div className="pe-4 h-100">
              <div
                className="row p-5 border rounded"
                style={{
                  backgroundColor: "#E3E3E3",
                  backgroundImage:
                    "linear-gradient(to right, #D1E7FF,#EEFFE3,#FFFFFF)",
                }}
              >
                <div className="col-1">
                  <div className="text-center text-primary">
                    <ExclamationDiamondFill style={{ fontSize: 72 }} />
                  </div>
                </div>
                <div className="col-3 m-0">
                  <div className="font-inter fw-600 fs-18">
                    Verifikasi identitas Anda
                  </div>
                  <div className="font-inter fw-400 fs-14 mt-3">
                    Selesaikan proses verifikasi identitas untuk mengamankan
                    akun dan transaksi Anda.
                  </div>
                  <div className="font-inter fw-400 fs-14 text-danger mt-3">
                    Siapkan Kartu Identitas (KTP) Anda
                  </div>
                </div>
                <div className="col d-flex align-items-center">
                  <div
                    className="btn btn-primary ms-5"
                    onClick={() => navigate("/kyc")}
                  >
                    Selesaikan verifikasi KYC sekarang
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-between mt-5">
                <div className="col-4">
                  <div className=" row d-flex">
                    <div className=" col-3 d-flex justify-content-center align-items-center">
                      <img src={img_avatar} className="img-fluid" alt="" />
                    </div>
                    <div className="col">
                      <div
                        className="font-inter text-info fw-600 my-2"
                        style={{ fontSize: 32 }}
                      >
                        <span className="text-dark me-2">hidayat</span>
                        <PatchCheckFill />
                      </div>
                      <div className="font-inter fw-600 fs-14 text-danger rounded d-flex align-items-center">
                        <div
                          className="px-2"
                          style={{ backgroundColor: "	rgb(192,192,192,0.2)" }}
                        >
                          <span className="me-2">
                            Akun Anda Belum Diverifikasi
                          </span>
                          <XCircleFill />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="text-end">
                    <div className="text-muted" style={{ fontSize: 32 }}>
                      {view ? (
                        <EyeFill onClick={() => setView(false)} />
                      ) : (
                        <EyeSlashFill onClick={() => setView(true)} />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <hr style={{ margin: "100px 0" }} />

              <div className="row d-flex justify-content-between">
                <div className="col-4">
                  <div className=" row d-flex">
                    <div className=" col-3 d-flex justify-content-center align-items-center">
                      <img src={img_avatar} className="img-fluid" alt="" />
                    </div>
                    <div className="col">
                      <div
                        className="font-inter text-info fw-600 my-2"
                        style={{ fontSize: 32 }}
                      >
                        <span className="text-dark me-2">hidayat</span>
                        <PatchCheckFill />
                      </div>
                      <div className="font-inter fw-600 fs-14 text-success rounded d-flex align-items-center">
                        <div
                          className="px-2"
                          style={{ backgroundColor: "	rgb(192,192,192,0.2)" }}
                        >
                          <span className="me-2">
                            Akun Anda telah Diverifikasi
                          </span>
                          <CheckCircleFill />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="text-end">
                    <div className="text-muted" style={{ fontSize: 32 }}>
                      {view ? (
                        <EyeFill onClick={() => setView(false)} />
                      ) : (
                        <EyeSlashFill onClick={() => setView(true)} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Username */}
          <div className="row mt-5">
            <div className="col">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Username
              </div>

              <div className="font-inter fw-400 fs-14 ">
                Identitas Anda untuk login dan riwayat transaksi
              </div>
            </div>
            <div className="col-4">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                @four_five3523
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="row mt-4">
            <div className="col">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Email
              </div>

              <div className="font-inter fw-400 fs-14 ">
                Untuk login, penarikan, mengambil kata sandi, perubahan
                pengaturan keamanan dan manajemen API.
              </div>
            </div>
            <div className="col-4">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                <div className="">
                  <CheckCircleFill className="text-success" />
                  {view ? (
                    <span className="ms-2">hidayat_four@gmail.com</span>
                  ) : (
                    <span className="ms-2">hida**@gmail.com</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Contact */}
          <div className="row mt-4">
            <div className="col">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Kontak
              </div>

              <div className="font-inter fw-400 fs-14 ">
                Untuk login, penarikan, mengambil kata sandi, perubahan
                pengaturan keamanan dan manajemen API.
              </div>
            </div>
            <div className="col-4">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                <div className="">
                  <CheckCircleFill className="text-success" />
                  {view ? (
                    <span className="ms-2">+6282145871234</span>
                  ) : (
                    <span className="ms-2">+628214587****</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Point */}
          <div className="row mt-4">
            <div className="col">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Total Point : 150{" "}
                <span className="px-1 fw-bold text-warning">
                  <Gem />
                </span>
              </div>

              <div className="font-inter fw-400 fs-14 ">
                Point bisa digunakan atau di redeem cash out ke rekening Anda
              </div>
            </div>
            <div className="col-4">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                <div
                  className="btn btn-sm btn-primary px-4"
                  data-bs-toggle="modal"
                  data-bs-target="#PointToCash"
                >
                  Point to Cash Out
                </div>
              </div>
            </div>
          </div>
          <hr style={{ margin: "100px 0px" }} />
          <div className="row">
            <div className="col">
              <div className="font-roboto fw-700" style={{ fontSize: 32 }}>
                {" "}
                Data Pribadi
              </div>
            </div>
            <div className="col-2 d-flex align-items-center">
              <div className="btn btn-sm btn-secondary">ubah</div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Tempat Kelahiran
              </div>
              <div className="font-inter fw-400 fs-16">Tanjung Pinang</div>
            </div>
            <div className="col">
              <div className="col-3">
                <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                  Alamat
                </div>
                <div className="font-inter fw-400 fs-16">
                  Jl. Kemanggisan Ilir 3
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Tanggal Lahir
              </div>
              <div className="font-inter fw-400 fs-16">14-05-1989</div>
            </div>
            <div className="col">
              <div className="col-3">
                <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                  Provinsi
                </div>
                <div className="font-inter fw-400 fs-16">DKI Jakarta</div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Jenis Kelamin
              </div>
              <div className="font-inter fw-400 fs-16">Laki -Laki </div>
            </div>
            <div className="col">
              <div className="col-3">
                <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                  Kota
                </div>
                <div className="font-inter fw-400 fs-16">
                  KOTA ADM JAKARTA BARAT
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Kewarganegaraan
              </div>
              <div className="font-inter fw-400 fs-16">Indonesia</div>
            </div>
            <div className="col">
              <div className="col-3">
                <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                  Kode Pos
                </div>
                <div className="font-inter fw-400 fs-16">174857</div>
              </div>
            </div>
          </div>
          c
          <hr style={{ margin: "100px 0px" }} />
          <div className="row">
            <div className="col">
              <div className="font-roboto fw-700" style={{ fontSize: 32 }}>
                {" "}
                Kontak darurat
              </div>
            </div>
            <div className="col-2 d-flex align-items-center">
              <div className="btn btn-sm btn-secondary">ubah</div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Nama
              </div>
              <div className="font-inter fw-400 fs-16">Anissa Azahraa</div>
            </div>
            <div className="col">
              <div className="col-3">
                <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                  Nomor telepon
                </div>
                <div className="font-inter fw-400 fs-16">+62854-7858-545</div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="font-roboto fw-700" style={{ fontSize: 32 }}>
                {" "}
                Aktivitas Akun
              </div>
            </div>
            <div className="col-2 d-flex align-items-center">
              <div
                className="btn btn-sm btn-secondary"
                onClick={() => navigate("/account-activity")}
              >
                detail
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="font-inter fw-400 fs-16">
                Login Terakhir : 02-02-2023 14:26:21
              </div>
              <div className="font-inter fw-400 fs-16 mt-2">
                Aktivitas akun yang mencurigakan?
                <span className="text-primary"> Nonaktifkan Akun?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <PointToCash />
    </>
  )
}
