import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

// api폴더 내부의 graphql 확장자를 가진 모든 파일을 배열 형태로 가져옴
const allTypes = loadFilesSync(path.join(__dirname, '../api/**/*.graphql'));

// api폴더 내부의 resolvers.* 확장자를 가진 모든 파일을 배열 형태로 가져옴
const allResolvers = loadFilesSync(path.join(__dirname, '../api/**/*.ts'));

// 스키마 생성
export const schema = makeExecutableSchema({
  // 가져온 graphql 타입들을 하나로 합쳐줌
  typeDefs: mergeTypeDefs(allTypes),
  // 가져온 resover 함수들을 하나로 합쳐줌
  resolvers: mergeResolvers(allResolvers),
});
