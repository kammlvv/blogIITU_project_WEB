/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React from "react";
import styleWallet from "./Wallet.module.css";
// eslint-disable-next-line require-jsdoc
function Wallet(props) {
  return (
    <main className={styleWallet.wallet}>
      <div className={styleWallet.balanceBox}>
        <div className={styleWallet.balance}>
          <h3>Ваш текущий баланс: </h3>
          <div className={styleWallet.currentBalance}></div>
        </div>
        <div className={styleWallet.topUp}>
          <a href="#">
            <button className={styleWallet.topUpAccount}>Пополнить счёт</button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Wallet;
