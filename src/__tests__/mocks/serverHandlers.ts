import { rest } from 'msw';
import gitmojiTestFile from '../fixtures/testFile.json';

const handlers = [
  rest.get('https://raw.githubusercontent.com/carloscuesta/gitmoji/master/packages/gitmojis/src/gitmojis.json',
    async (_, res, ctx) => {
      return res(ctx.json(gitmojiTestFile))
    }),
];
export { handlers }
