"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = void 0;
const axios = require("axios");

const messageCorrection = async (input, options) => {
    const openai = axios.default.create({
        baseURL: "https://api.openai.com/v1",
        headers: { Authorization: `Bearer ${options.apikey}` },
    });
    const prompt = `
    Please revise this git commit message to make its meaning clearer, fix grammar, and correct any typos and as concise as possible.
    Note that after a colon, it should be lowercase, and don't add a period at the end of sentences. 
    If you receive this content in Chinese, please first translate it to English, then make the corrections.
    If there's no problem, no need to modify:\n\n
    `;
    const { data } = await openai.post("chat/completions", {
        model: `${options.model}`,
        messages: [
            { role: "system", content: prompt },
            { role: "user", content: input.text }
        ],
    });
    const response = data.choices[0].message.content.trim();

    popclip.pasteText(response);

    return null;
};

exports.actions = [{
    title: "ChatGPT: git commit -m correction",
    code: messageCorrection,
}];