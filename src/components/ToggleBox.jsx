import useToggle from "../hooks/useToggle";

export default function ToggleBox() {
    const [isVisible, toggleVisible] = useToggle(false);

    return (
        <div>
            <h2>🔁 useToggle 훅 예제</h2>
            <button onClick={toggleVisible}>{isVisible ? "숨기기" : "보이기"}</button>

            {isVisible && (
                <div style={{ marginTop: "10px", padding: "10px", background: "#eee" }}>
                    👋 이 박스는 보였다가 숨겨질 수 있어요!
                </div>
            )}
        </div>
    );
}
