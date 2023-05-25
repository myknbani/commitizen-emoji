import { rest } from 'msw';
import gitmojiTestFile from '../fixtures/testFile.json';

const handlers = [
  rest.get('https://raw.githubusercontent.com/myknbani/commitizen-emoji/master/src/data/gitmojis.json',
    async (_, res, ctx) => {
      return res(ctx.json(gitmojiTestFile))
    }),
];
export { handlers }
