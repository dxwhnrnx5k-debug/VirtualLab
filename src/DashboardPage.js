import React, { useState } from "react";
import "./DashboardPage.css";

function DashboardPage() {
  const [vmStatus, setVmStatus] = useState("off");

  const handleVMAction = (action) => {
    setVmStatus(action);
    alert(`VM ${action === "on" ? "started" : action === "off" ? "shut down" : action}`);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src="/bsulogo.png" alt="Ball State University" className="bsu-logo" />
        <h1>Virtual Lab Dashboard</h1>
      </header>

      <main className="dashboard-main">
        <section className="lab-instructions">
          <h2>Lab Instructions</h2>
          <p>
            Welcome to your virtual lab environment. Here you’ll find all necessary steps and
            resources once labs are fully implemented.
          </p>
        </section>

        <section className="vm-controls">
          <h2>VM Controls</h2>
          <p>Status: <strong>{vmStatus.toUpperCase()}</strong></p>
          <div className="button-group">
            <button onClick={() => handleVMAction("on")} className="btn start">Power On</button>
            <button onClick={() => handleVMAction("pause")} className="btn pause">Pause</button>
            <button onClick={() => handleVMAction("reset")} className="btn reset">Reset</button>
            <button onClick={() => handleVMAction("off")} className="btn stop">Power Off</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;