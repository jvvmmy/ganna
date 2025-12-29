// ====== AI LOVE MESSAGES ======
const API_KEY = "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";

async function aiMessage() {
    const box = document.getElementById("message");
    box.innerText = "Thinking with love ❤️";

    try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "You write short emotional love messages." },
                    { role: "user", content: "Write a romantic love message for my girlfriend named Ganna Hussain." }
                ],
                max_tokens: 60
            })
        });

        const data = await res.json();
        box.innerText = data.choices[0].message.content;
    } catch (err) {
        box.innerText = "Error: Can't fetch AI message 😔";
        console.error(err);
    }
}
