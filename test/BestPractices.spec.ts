import { ESLint } from "eslint";

describe("BestPractices", () => {
    it("no-alert", async () => {
        const results = await getErrors(`alert("")`);

        expect(results).toStrictEqual([]);
    });
});

async function getErrors (code: string): Promise<ESLint.LintResult []> {
    const eslint = new ESLint({
        // overrideConfigFile: "node.js",
    });

    const results = await eslint.lintText(code);

    return results;
}