/**
 * Commit message rules live in COMMIT_CONVENTION.md.
 */

const commitLintConfig = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'header-trim': [2, 'always'],
    'header-max-length': [2, 'always', 100],

    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-exclamation-mark': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-min-length': [2, 'always', 8],

    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
    'type-empty': [2, 'never'],

    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [0, 'never'],
    'scope-delimiter-style': [2, 'always', ['/', '-', '|']],
    'scope-min-length': [2, 'always', 2],

    'body-empty': [0, 'never'],
    'body-leading-blank': [2, 'always'],
    'body-min-length': [2, 'always', 8],
    'body-max-line-length': [2, 'always', 100],

    'footer-empty': [0, 'never'],
    'footer-leading-blank': [2, 'always'],
    'footer-min-length': [2, 'always', 8],
    'footer-max-line-length': [2, 'always', 100],
  },
};

export default commitLintConfig;
