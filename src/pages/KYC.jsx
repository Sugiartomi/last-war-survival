import { useState } from "react";
import { PersonBoundingBox } from "react-bootstrap-icons";
import KTP from "../components/KYC/KTP";
import VerifikasiWajah from "../components/KYC/VerifikasiWajah";
import VerifikasiDataPribadi from "../components/KYC/VerifikasiDataPribadi";
import Footer from "../components/Reusble/Footer";
import NavbarTrue from "../components/Reusble/NavbarTrue";
import DataPribadi from "../components/KYC/DataPribadi";
import KontakDarurat from "../components/KYC/KontakDarurat";

export default function KYC() {
	const [step, setStep] = useState("Kartu Identitas");

	return (
		<>
			<NavbarTrue />
			<div
				className="d-flex justify-content-between"
				style={{ backgroundColor: "	rgb(192,192,192,0.2)" }}
			>
				<div className="font-roboto fw-700 px-5 py-4" style={{ fontSize: 32 }}>
					KYC - {step}
				</div>
				<div className="text-muted px-5 py-4" style={{ fontSize: 32 }}>
					<PersonBoundingBox />
				</div>
			</div>

			<div className="container">
				<div className=" d-flex justify-content-center">
					<div className="my-5" style={{ width: "60%" }}>
						<div className="font-inter fw-400 fs-14 text-center">
							<span className={step === "Kartu Identitas" ? "text-primary fw-bold mx-2" : "mx-2"}>
								KTP
							</span>
							/
							<span className={step === "Verifikasi Wajah" ? "text-primary  fw-bold mx-2" : "mx-2"}>
								Verifikasi Wajah
							</span>
							/
							<span
								className={
									step === "Verifikasi Data Pribadi" ? "text-primary fw-bold mx-2" : "mx-2"
								}
							>
								Verifiaksi Data Pribadi
							</span>
							/
							<span className={step === "Data Pribadi" ? "text-primary fw-bold mx-2" : "mx-2"}>
								Data Pribadi
							</span>
							/
							<span className={step === "Kontak Darurat" ? "text-primary fw-bold mx-2" : "mx-2"}>
								Kontak Darurat
							</span>
						</div>
						{step === "Kartu Identitas" ? (
							<KTP setStep={setStep} />
						) : step === "Verifikasi Wajah" ? (
							<VerifikasiWajah setStep={setStep} />
						) : step === "Verifikasi Data Pribadi" ? (
							<VerifikasiDataPribadi setStep={setStep} />
						) : step === "Data Pribadi" ? (
							<DataPribadi setStep={setStep} />
						) : (
							step === "Kontak Darurat"? <KontakDarurat setStep={setStep}/> : "kesini"
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
