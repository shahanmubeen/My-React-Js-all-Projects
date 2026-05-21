import { useState, useEffect, useCallback } from "react";

const PUZZLES = [
  {
    id: 1,
    answer: "UNITED STATES",
    hint: "🇺🇸 North America ka sabse bada desh",
    words: ["UNITED", "STATES"],
  },
  {
    id: 2,
    answer: "SAUDI ARABIA",
    hint: "🇸🇦 Middle East ka desh",
    words: ["SAUDI", "ARABIA"],
  },
  {
    id: 3,
    answer: "SOUTH KOREA",
    hint: "🇰🇷 K-pop ka desh",
    words: ["SOUTH", "KOREA"],
  },
  {
    id: 4,
    answer: "NEW ZEALAND",
    hint: "🇳🇿 Kiwi birds ka ghar",
    words: ["NEW", "ZEALAND"],
  },
  {
    id: 5,
    answer: "UNITED KINGDOM",
    hint: "🇬🇧 Big Ben wala desh",
    words: ["UNITED", "KINGDOM"],
  },
];


const ALL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function App() {
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [guessed, setGuessed] = useState(new Set());
  const [lives, setLives] = useState(6);
  const [gameStatus, setGameStatus] = useState("playing"); // playing | won | lost
  const [shake, setShake] = useState(false);
  const [flashGreen, setFlashGreen] = useState(null);

  const puzzle = PUZZLES[puzzleIndex];
  const answerLetters = puzzle.answer.replace(/ /g, "").split("");
  const uniqueLetters = [...new Set(answerLetters)];

  const wrongGuesses = [...guessed].filter((l) => !uniqueLetters.includes(l));
  const correctGuesses = [...guessed].filter((l) => uniqueLetters.includes(l));

  useEffect(() => {
    
    if (uniqueLetters.every((l) => guessed.has(l))) {
      setGameStatus("won");
    }
    
    if (wrongGuesses.length >= lives && gameStatus === "playing") {
      setGameStatus("lost");
    }
  }, [guessed]);

  const handleGuess = useCallback(
    (letter) => {
      if (guessed.has(letter) || gameStatus !== "playing") return;
      const newGuessed = new Set(guessed);
      newGuessed.add(letter);
      setGuessed(newGuessed);

      if (uniqueLetters.includes(letter)) {
        setFlashGreen(letter);
        setTimeout(() => setFlashGreen(null), 600);
      } else {
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    },
    [guessed, gameStatus, uniqueLetters]
  );

  const nextPuzzle = () => {
    setPuzzleIndex((i) => (i + 1) % PUZZLES.length);
    setGuessed(new Set());
    setLives(6);
    setGameStatus("playing");
  };

  const restart = () => {
    setGuessed(new Set());
    setLives(6);
    setGameStatus("playing");
  };

  
  const renderWord = (word) => (
    <div style={styles.wordRow}>
      {word.split("").map((letter, i) => {
        const revealed = guessed.has(letter);
        return (
          <div
            key={i}
            style={{
              ...styles.tile,
              ...(revealed ? styles.tileRevealed : styles.tileHidden),
              transform: revealed ? "scale(1.05)" : "scale(1)",
              transition: "all 0.3s ease",
            }}
          >
            {revealed ? letter : ""}
          </div>
        );
      })}
    </div>
  );

  const remainingLives = lives - wrongGuesses.length;

  return (
    <div style={styles.root}>
      {/* BG glow */}
      <div style={styles.bgGlow1} />
      <div style={styles.bgGlow2} />

      <div style={styles.card}>
    
        <div style={styles.header}>
          <div style={styles.globe}>🌍</div>
          <h1 style={styles.title}>Countries</h1>
          <div style={styles.livesRow}>
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                style={{
                  ...styles.heart,
                  opacity: i < remainingLives ? 1 : 0.2,
                  transform: i < remainingLives ? "scale(1)" : "scale(0.8)",
                }}
              >
                ❤️
              </span>
            ))}
          </div>
        </div>

    \
        <p style={styles.hint}>{puzzle.hint}</p>

      
        <div
          style={{
            ...styles.board,
            animation: shake ? "shake 0.5s ease" : "none",
          }}
        >
          {puzzle.words.map((word, wi) => (
            <div key={wi}>{renderWord(word)}</div>
          ))}
        </div>

      
        {gameStatus !== "playing" && (
          <div style={styles.statusBanner}>
            {gameStatus === "won" ? (
              <>
                <div style={styles.statusEmoji}>🎉</div>
                <div style={styles.statusText}>Shahbaash! Sahi jawab!</div>
                <div style={styles.answerReveal}>{puzzle.answer}</div>
                <button style={styles.btn} onClick={nextPuzzle}>
                  Agla Puzzle →
                </button>
              </>
            ) : (
              <>
                <div style={styles.statusEmoji}>💔</div>
                <div style={styles.statusText}>Haar gaye! Jawab tha:</div>
                <div style={styles.answerReveal}>{puzzle.answer}</div>
                <div style={styles.btnRow}>
                  <button style={styles.btn} onClick={restart}>
                    Dobara Khelein
                  </button>
                  <button style={{ ...styles.btn, ...styles.btnSecondary }} onClick={nextPuzzle}>
                    Agla Puzzle →
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        
        <div style={styles.keyboard}>
          {[
            ALL_LETTERS.slice(0, 9),
            ALL_LETTERS.slice(9, 18),
            ALL_LETTERS.slice(18, 26),
          ].map((row, ri) => (
            <div key={ri} style={styles.keyRow}>
              {row.map((letter) => {
                const isCorrect = correctGuesses.includes(letter);
                const isWrong = wrongGuesses.includes(letter);
                const isFlash = flashGreen === letter;
                return (
                  <button
                    key={letter}
                    style={{
                      ...styles.key,
                      ...(isCorrect ? styles.keyCorrect : {}),
                      ...(isWrong ? styles.keyWrong : {}),
                      ...(isFlash ? styles.keyFlash : {}),
                      cursor:
                        guessed.has(letter) || gameStatus !== "playing"
                          ? "not-allowed"
                          : "pointer",
                      opacity: isWrong ? 0.4 : 1,
                    }}
                    onClick={() => handleGuess(letter)}
                    disabled={guessed.has(letter) || gameStatus !== "playing"}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Progress */}
        <div style={styles.progressRow}>
          <span style={styles.progressText}>
            Puzzle {puzzleIndex + 1} / {PUZZLES.length}
          </span>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: `${((puzzleIndex + 1) / PUZZLES.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0d1b3e; }
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          80% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        button:active { transform: scale(0.93) !important; }
      `}</style>
    </div>
  );
}

const styles = {
  root: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0d1b3e 0%, #1a2f6e 50%, #0d1b3e 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Nunito', sans-serif",
    position: "relative",
    overflow: "hidden",
    padding: "16px",
  },
  bgGlow1: {
    position: "fixed",
    top: "-100px",
    left: "-100px",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  bgGlow2: {
    position: "fixed",
    bottom: "-100px",
    right: "-80px",
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  card: {
    background: "rgba(15,30,80,0.9)",
    borderRadius: "28px",
    padding: "28px 20px 24px",
    maxWidth: "480px",
    width: "100%",
    boxShadow: "0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
    border: "1px solid rgba(99,130,241,0.2)",
    position: "relative",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "8px",
  },
  globe: {
    fontSize: "28px",
  },
  title: {
    fontSize: "26px",
    fontWeight: 900,
    color: "#fff",
    letterSpacing: "-0.5px",
    flex: 1,
  },
  livesRow: {
    display: "flex",
    gap: "3px",
  },
  heart: {
    fontSize: "16px",
    transition: "all 0.3s ease",
  },
  hint: {
    fontSize: "13px",
    color: "rgba(180,200,255,0.7)",
    marginBottom: "20px",
    fontWeight: 700,
  },
  board: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    marginBottom: "24px",
  },
  wordRow: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  tile: {
    width: "48px",
    height: "52px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: 900,
    letterSpacing: "1px",
  },
  tileRevealed: {
    background: "linear-gradient(145deg, #3b82f6, #2563eb)",
    color: "#fff",
    boxShadow: "0 4px 16px rgba(59,130,246,0.5)",
    border: "2px solid rgba(147,197,253,0.4)",
  },
  tileHidden: {
    background: "rgba(255,255,255,0.06)",
    border: "2px solid rgba(99,120,200,0.3)",
    color: "transparent",
  },
  keyboard: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "center",
    marginBottom: "20px",
  },
  keyRow: {
    display: "flex",
    gap: "6px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  key: {
    width: "38px",
    height: "42px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.9)",
    border: "none",
    fontSize: "14px",
    fontWeight: 800,
    color: "#1a2f6e",
    fontFamily: "'Nunito', sans-serif",
    transition: "all 0.2s ease",
    boxShadow: "0 3px 0 rgba(0,0,0,0.3)",
  },
  keyCorrect: {
    background: "linear-gradient(145deg, #3b82f6, #2563eb)",
    color: "#fff",
    boxShadow: "0 3px 0 rgba(37,99,235,0.5)",
  },
  keyWrong: {
    background: "rgba(80,80,100,0.5)",
    color: "rgba(200,200,220,0.5)",
    boxShadow: "none",
  },
  keyFlash: {
    background: "linear-gradient(145deg, #22c55e, #16a34a)",
    color: "#fff",
    transform: "scale(1.2)",
    boxShadow: "0 0 16px rgba(34,197,94,0.7)",
  },
  statusBanner: {
    background: "rgba(10,20,60,0.95)",
    borderRadius: "20px",
    padding: "24px",
    marginBottom: "20px",
    textAlign: "center",
    border: "1px solid rgba(99,130,241,0.3)",
    animation: "popIn 0.4s ease",
  },
  statusEmoji: {
    fontSize: "48px",
    marginBottom: "8px",
  },
  statusText: {
    color: "rgba(200,220,255,0.9)",
    fontSize: "18px",
    fontWeight: 800,
    marginBottom: "8px",
  },
  answerReveal: {
    color: "#60a5fa",
    fontSize: "22px",
    fontWeight: 900,
    letterSpacing: "2px",
    marginBottom: "16px",
  },
  btnRow: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btn: {
    background: "linear-gradient(135deg, #3b82f6, #6366f1)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "12px 24px",
    fontSize: "15px",
    fontWeight: 800,
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
    boxShadow: "0 4px 16px rgba(99,102,241,0.4)",
    transition: "all 0.2s ease",
  },
  btnSecondary: {
    background: "rgba(255,255,255,0.1)",
    boxShadow: "none",
    border: "1px solid rgba(255,255,255,0.2)",
  },
  progressRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  progressText: {
    color: "rgba(150,170,220,0.7)",
    fontSize: "12px",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },
  progressBar: {
    flex: 1,
    height: "6px",
    borderRadius: "99px",
    background: "rgba(255,255,255,0.1)",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: "99px",
    background: "linear-gradient(90deg, #3b82f6, #6366f1)",
    transition: "width 0.5s ease",
  },
};
