import "./assets/css/index.css";
import "./assets/css/app.scss";


import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import OTPForgotPassword from "./pages/OTPForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import AppPackage from "./pages/AppPackage";
import Crystal from "./pages/Crystal";
import ActivationKey from "./pages/ActivationKey";
import Profile from "./pages/Profile";
import Profile2 from "./pages/Profile2";
import Wallet from "./pages/Wallet";
import WalletManagement from "./pages/WalletManagement";
import TransferWallet from "./pages/Transfer";
import AccountActivity from "./pages/AccountAcitivy";
import Security from "./pages/Security";
import Security2 from "./pages/Security2";
import KYC from "./pages/KYC";
import Referensi from "./pages/Referensi";
import AppPackageCard from "./components/AppPackage/Card";
import AppPackageTransactionHistory from "./components/AppPackage/History";
import CrystalCard from "./components/Crystal/Card";
import CrystalHistory from "./components/Crystal/History";
import ActivationKeyCard from "./components/ActivationKey/Card";
import ActivationKeyHistory from "./components/ActivationKey/History";
import Login2FA from "./pages/Login2FA";
import Add2fa from "./pages/Add2fa";
import HomePage from "./pages/HomePage"
import Trade from "./pages/Trade"
import TradeCoin from "./pages/TradeCoin"


function App() {
	return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/login-2fa" element={<Login2FA />} />

        <Route path="/register" element={<Register />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/forgot-password-otp" element={<OTPForgotPassword />} />

        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/trade-nama-coin" element={<TradeCoin />} />

        <Route path="/app-package" element={<AppPackage />}>
          <Route path="/app-package/card" element={<AppPackageCard />} />
          <Route
            path="/app-package/history"
            element={<AppPackageTransactionHistory />}
          />
        </Route>

        <Route path="/crystal" element={<Crystal />}>
          <Route path="/crystal/card" element={<CrystalCard />} />
          <Route path="/crystal/history" element={<CrystalHistory />} />
        </Route>

        <Route path="/activation-key" element={<ActivationKey />}>
          <Route path="/activation-key/card" element={<ActivationKeyCard />} />
          <Route
            path="/activation-key/history"
            element={<ActivationKeyHistory />}
          />
        </Route>

        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/profile" element={<Profile2 />} />

        <Route path="/wallet" element={<Wallet />} />

        <Route path="/wallet-management" element={<WalletManagement />} />

        <Route path="/wallet-transfer" element={<TransferWallet />} />

        <Route path="/account-activity" element={<AccountActivity />} />

        <Route path="/security" element={<Security2 />} />

        <Route path="/2fa" element={<Add2fa />} />

        <Route path="/kyc" element={<KYC />} />

        <Route path="/referensi" element={<Referensi />} />
      </Routes>
    </div>
  )
}

export default App;
