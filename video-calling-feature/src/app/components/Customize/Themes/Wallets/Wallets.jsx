import React, { useEffect, useState } from "react";
import Section from "../../Section/Section";
import CheckboxWithName from "./CheckboxWithName";
import { iframeApi } from "@huddle01/iframe";

const Wallets = () => {
  const initialWallets = {
    metamask: true,
    walletconnect: true,
    phantom: true,
    // templewallet: true,
    keplr: true,
    lens: true,
    ud: true,
    cyberconnect: true,
    beacon: true,
    okxwallet: true,
  };

  const walletNames = {
    keplr: "Keplr",
    metamask: "Metamask",
    walletconnect: "WalletConnect",
    phantom: "Phantom",
    // templewallet: "Temple",
    lens: "Lens",
    ud: "UD",
    cyberconnect: "CyberConnect",
    beacon: "Beacon",
    okxwallet: "OKX Wallet",
  };

  const [wallets, setWallets] = useState(initialWallets);

  const [all, setAll] = useState(true);
  const [lockRoom, setLockRoom] = useState(true);

  const onChange = (e) => {
    setWallets((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    setAll(false);
  };

  useEffect(() => {
    const newWallets = all
      ? ["*"]
      : [...Object.keys(wallets).filter((key) => wallets[key])];

    console.log({ newWallets });

    iframeApi.initialize({
      wallets: newWallets,
    });
  }, [wallets, all]);

  return (
    <Section title="Wallets & DIDs">
      <div className="grid grid-cols-2 gap-3 border border-slate-700 p-4 rounded-lg">
        <CheckboxWithName
          title={"All"}
          checked={all}
          onChange={(e) => {
            e.target.checked && setWallets(initialWallets);
            setAll((prev) => !prev);
          }}
        />
        {Object.entries(walletNames).map(([key, name]) => (
          <CheckboxWithName
            key={key}
            title={name}
            checked={wallets[key]}
            onChange={onChange}
            name={key}
          />
        ))}
        <CheckboxWithName
          key={"lockRoom"}
          title={"Lock Room"}
          checked={lockRoom}
          onChange={(e) => {
            if (e.target.checked) iframeApi.lockRoom();
            else iframeApi.unlockRoom();
            setLockRoom(e.target.checked);
          }}
          name={"lockRoom"}
        />
      </div>
    </Section>
  );
};

export default Wallets;
