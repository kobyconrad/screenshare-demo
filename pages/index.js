export default function Home() {
  return (
    <div className="appContainer">
      <div
        className="shareButton"
        onClick={() => {
          console.log("click");
        }}
      >
        START SHARE
      </div>
      <style jsx>{`
        .appContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        .shareButton {
          background-color: #444;
          width: 160px;
          height: 40px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
        }
        .shareButton:hover {
          opacity: 0.7;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
