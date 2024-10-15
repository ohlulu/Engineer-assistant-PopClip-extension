"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = void 0;

const axios = require("axios");

const messageCorrection = async (input, options) => {
    console.error("options", options);

    const claude = axios.default.create({
        baseURL: "https://api.anthropic.com",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": options.apikey.toString(),
            "anthropic-version": "2023-06-01",
        },
    });

    try {
        const { data } = await claude.post("/v1/messages", {
            model: options.model.toString(),
            max_tokens: 1024,
            temperature: 0,
            system: `Revise this git commit message:
            - Clarify meaning
            - Fix grammar and typos
            - Be concise
            - Use lowercase after colons
            - Omit final periods
            - If in Chinese, translate to English first
            - Return only the revised message
            - If no issues, leave unchanged`,
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: input.text.toString(),
                        },
                    ],
                },
            ],
        });

        const response = data.content[0].text.trim();
        popclip.pasteText(response);
    } catch (error) {
        console.error("Error calling Claude API:", error);
        popclip.showText("Error: " + error.message + "model11" + options.apikey.toString());
    }

    return null;
};

exports.actions = [
    {
        title: "Claude: git commit -m correction",
        code: messageCorrection,
    },
];
