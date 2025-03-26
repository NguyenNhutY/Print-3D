import { useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const GCodeSender = () => {
    const [gcode, setGcode] = useState("");

    const sendGCode = () => {
        if (gcode.trim()) {
            socket.emit("send-gcode", gcode);
            setGcode("");
        }
    };

    return (
        <div>
            <h2>Gửi lệnh G-code</h2>
            <input
                type="text"
                value={gcode}
                onChange={(e) => setGcode(e.target.value)}
                placeholder="Nhập G-code..."
            />
            <button onClick={sendGCode}>Gửi</button>
        </div>
    );
};

export default GCodeSender;
