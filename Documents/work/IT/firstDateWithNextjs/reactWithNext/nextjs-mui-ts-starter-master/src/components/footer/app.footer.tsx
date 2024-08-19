'use client'

import { AppBar } from "@mui/material";

const AppFooter = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <footer className="footer">
        <p className="text">HuuDung with Nextjs</p>

        <style jsx>{`
        .footer {
          background-color: #333;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .text {
          color: #fff;
          font-size: 18px;
          text-align: center;
        }
      `}</style>
      </footer>
    </AppBar>
  );
};

export default AppFooter;
