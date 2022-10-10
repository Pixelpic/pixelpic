import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type AuthenticatedItem = User;

export type Color = {
  __typename?: 'Color';
  blue?: Maybe<Scalars['Int']>;
  green?: Maybe<Scalars['Int']>;
  hex?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  red?: Maybe<Scalars['Int']>;
};

export type ColorCreateInput = {
  blue?: InputMaybe<Scalars['Int']>;
  green?: InputMaybe<Scalars['Int']>;
  hex?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  red?: InputMaybe<Scalars['Int']>;
};

export type ColorManyRelationFilter = {
  every?: InputMaybe<ColorWhereInput>;
  none?: InputMaybe<ColorWhereInput>;
  some?: InputMaybe<ColorWhereInput>;
};

export type ColorOrderByInput = {
  blue?: InputMaybe<OrderDirection>;
  green?: InputMaybe<OrderDirection>;
  hex?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  red?: InputMaybe<OrderDirection>;
};

export type ColorRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ColorWhereUniqueInput>>;
  create?: InputMaybe<Array<ColorCreateInput>>;
};

export type ColorRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ColorWhereUniqueInput>>;
  create?: InputMaybe<Array<ColorCreateInput>>;
  disconnect?: InputMaybe<Array<ColorWhereUniqueInput>>;
  set?: InputMaybe<Array<ColorWhereUniqueInput>>;
};

export type ColorUpdateArgs = {
  data: ColorUpdateInput;
  where: ColorWhereUniqueInput;
};

export type ColorUpdateInput = {
  blue?: InputMaybe<Scalars['Int']>;
  green?: InputMaybe<Scalars['Int']>;
  hex?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  red?: InputMaybe<Scalars['Int']>;
};

export type ColorWhereInput = {
  AND?: InputMaybe<Array<ColorWhereInput>>;
  NOT?: InputMaybe<Array<ColorWhereInput>>;
  OR?: InputMaybe<Array<ColorWhereInput>>;
  blue?: InputMaybe<IntFilter>;
  green?: InputMaybe<IntFilter>;
  hex?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  red?: InputMaybe<IntFilter>;
};

export type ColorWhereUniqueInput = {
  hex?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type Frame = {
  __typename?: 'Frame';
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
};

export type FrameCreateInput = {
  height?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type FrameOrderByInput = {
  height?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  width?: InputMaybe<OrderDirection>;
};

export type FrameUpdateArgs = {
  data: FrameUpdateInput;
  where: FrameWhereUniqueInput;
};

export type FrameUpdateInput = {
  height?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type FrameWhereInput = {
  AND?: InputMaybe<Array<FrameWhereInput>>;
  NOT?: InputMaybe<Array<FrameWhereInput>>;
  OR?: InputMaybe<Array<FrameWhereInput>>;
  height?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  width?: InputMaybe<IntFilter>;
};

export type FrameWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read',
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read',
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createColor?: Maybe<Color>;
  createColors?: Maybe<Array<Maybe<Color>>>;
  createFrame?: Maybe<Frame>;
  createFrames?: Maybe<Array<Maybe<Frame>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createPalette?: Maybe<Palette>;
  createPalettes?: Maybe<Array<Maybe<Palette>>>;
  createPresale?: Maybe<Presale>;
  createPresales?: Maybe<Array<Maybe<Presale>>>;
  createSale?: Maybe<Sale>;
  createSales?: Maybe<Array<Maybe<Sale>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteColor?: Maybe<Color>;
  deleteColors?: Maybe<Array<Maybe<Color>>>;
  deleteFrame?: Maybe<Frame>;
  deleteFrames?: Maybe<Array<Maybe<Frame>>>;
  deletePalette?: Maybe<Palette>;
  deletePalettes?: Maybe<Array<Maybe<Palette>>>;
  deletePresale?: Maybe<Presale>;
  deletePresales?: Maybe<Array<Maybe<Presale>>>;
  deleteSale?: Maybe<Sale>;
  deleteSales?: Maybe<Array<Maybe<Sale>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  updateColor?: Maybe<Color>;
  updateColors?: Maybe<Array<Maybe<Color>>>;
  updateFrame?: Maybe<Frame>;
  updateFrames?: Maybe<Array<Maybe<Frame>>>;
  updatePalette?: Maybe<Palette>;
  updatePalettes?: Maybe<Array<Maybe<Palette>>>;
  updatePresale?: Maybe<Presale>;
  updatePresales?: Maybe<Array<Maybe<Presale>>>;
  updateSale?: Maybe<Sale>;
  updateSales?: Maybe<Array<Maybe<Sale>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationCreateColorArgs = {
  data: ColorCreateInput;
};

export type MutationCreateColorsArgs = {
  data: Array<ColorCreateInput>;
};

export type MutationCreateFrameArgs = {
  data: FrameCreateInput;
};

export type MutationCreateFramesArgs = {
  data: Array<FrameCreateInput>;
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreatePaletteArgs = {
  data: PaletteCreateInput;
};

export type MutationCreatePalettesArgs = {
  data: Array<PaletteCreateInput>;
};

export type MutationCreatePresaleArgs = {
  data: PresaleCreateInput;
};

export type MutationCreatePresalesArgs = {
  data: Array<PresaleCreateInput>;
};

export type MutationCreateSaleArgs = {
  data: SaleCreateInput;
};

export type MutationCreateSalesArgs = {
  data: Array<SaleCreateInput>;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};

export type MutationDeleteColorArgs = {
  where: ColorWhereUniqueInput;
};

export type MutationDeleteColorsArgs = {
  where: Array<ColorWhereUniqueInput>;
};

export type MutationDeleteFrameArgs = {
  where: FrameWhereUniqueInput;
};

export type MutationDeleteFramesArgs = {
  where: Array<FrameWhereUniqueInput>;
};

export type MutationDeletePaletteArgs = {
  where: PaletteWhereUniqueInput;
};

export type MutationDeletePalettesArgs = {
  where: Array<PaletteWhereUniqueInput>;
};

export type MutationDeletePresaleArgs = {
  where: PresaleWhereUniqueInput;
};

export type MutationDeletePresalesArgs = {
  where: Array<PresaleWhereUniqueInput>;
};

export type MutationDeleteSaleArgs = {
  where: SaleWhereUniqueInput;
};

export type MutationDeleteSalesArgs = {
  where: Array<SaleWhereUniqueInput>;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};

export type MutationUpdateColorArgs = {
  data: ColorUpdateInput;
  where: ColorWhereUniqueInput;
};

export type MutationUpdateColorsArgs = {
  data: Array<ColorUpdateArgs>;
};

export type MutationUpdateFrameArgs = {
  data: FrameUpdateInput;
  where: FrameWhereUniqueInput;
};

export type MutationUpdateFramesArgs = {
  data: Array<FrameUpdateArgs>;
};

export type MutationUpdatePaletteArgs = {
  data: PaletteUpdateInput;
  where: PaletteWhereUniqueInput;
};

export type MutationUpdatePalettesArgs = {
  data: Array<PaletteUpdateArgs>;
};

export type MutationUpdatePresaleArgs = {
  data: PresaleUpdateInput;
  where: PresaleWhereUniqueInput;
};

export type MutationUpdatePresalesArgs = {
  data: Array<PresaleUpdateArgs>;
};

export type MutationUpdateSaleArgs = {
  data: SaleUpdateInput;
  where: SaleWhereUniqueInput;
};

export type MutationUpdateSalesArgs = {
  data: Array<SaleUpdateArgs>;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Palette = {
  __typename?: 'Palette';
  colors?: Maybe<Array<Color>>;
  colorsCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type PaletteColorsArgs = {
  orderBy?: Array<ColorOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ColorWhereInput;
};

export type PaletteColorsCountArgs = {
  where?: ColorWhereInput;
};

export type PaletteCreateInput = {
  colors?: InputMaybe<ColorRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type PaletteOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type PaletteUpdateArgs = {
  data: PaletteUpdateInput;
  where: PaletteWhereUniqueInput;
};

export type PaletteUpdateInput = {
  colors?: InputMaybe<ColorRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type PaletteWhereInput = {
  AND?: InputMaybe<Array<PaletteWhereInput>>;
  NOT?: InputMaybe<Array<PaletteWhereInput>>;
  OR?: InputMaybe<Array<PaletteWhereInput>>;
  colors?: InputMaybe<ColorManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type PaletteWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Presale = {
  __typename?: 'Presale';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type PresaleCreateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type PresaleOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type PresaleUpdateArgs = {
  data: PresaleUpdateInput;
  where: PresaleWhereUniqueInput;
};

export type PresaleUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type PresaleWhereInput = {
  AND?: InputMaybe<Array<PresaleWhereInput>>;
  NOT?: InputMaybe<Array<PresaleWhereInput>>;
  OR?: InputMaybe<Array<PresaleWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type PresaleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  color?: Maybe<Color>;
  colors?: Maybe<Array<Color>>;
  colorsCount?: Maybe<Scalars['Int']>;
  frame?: Maybe<Frame>;
  frames?: Maybe<Array<Frame>>;
  framesCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  palette?: Maybe<Palette>;
  palettes?: Maybe<Array<Palette>>;
  palettesCount?: Maybe<Scalars['Int']>;
  presale?: Maybe<Presale>;
  presales?: Maybe<Array<Presale>>;
  presalesCount?: Maybe<Scalars['Int']>;
  sale?: Maybe<Sale>;
  sales?: Maybe<Array<Sale>>;
  salesCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};

export type QueryColorArgs = {
  where: ColorWhereUniqueInput;
};

export type QueryColorsArgs = {
  orderBy?: Array<ColorOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ColorWhereInput;
};

export type QueryColorsCountArgs = {
  where?: ColorWhereInput;
};

export type QueryFrameArgs = {
  where: FrameWhereUniqueInput;
};

export type QueryFramesArgs = {
  orderBy?: Array<FrameOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: FrameWhereInput;
};

export type QueryFramesCountArgs = {
  where?: FrameWhereInput;
};

export type QueryPaletteArgs = {
  where: PaletteWhereUniqueInput;
};

export type QueryPalettesArgs = {
  orderBy?: Array<PaletteOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PaletteWhereInput;
};

export type QueryPalettesCountArgs = {
  where?: PaletteWhereInput;
};

export type QueryPresaleArgs = {
  where: PresaleWhereUniqueInput;
};

export type QueryPresalesArgs = {
  orderBy?: Array<PresaleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PresaleWhereInput;
};

export type QueryPresalesCountArgs = {
  where?: PresaleWhereInput;
};

export type QuerySaleArgs = {
  where: SaleWhereUniqueInput;
};

export type QuerySalesArgs = {
  orderBy?: Array<SaleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SaleWhereInput;
};

export type QuerySalesCountArgs = {
  where?: SaleWhereInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};

export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Sale = {
  __typename?: 'Sale';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type SaleCreateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type SaleOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type SaleUpdateArgs = {
  data: SaleUpdateInput;
  where: SaleWhereUniqueInput;
};

export type SaleUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type SaleWhereInput = {
  AND?: InputMaybe<Array<SaleWhereInput>>;
  NOT?: InputMaybe<Array<SaleWhereInput>>;
  OR?: InputMaybe<Array<SaleWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type SaleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  role?: Maybe<UserRoleType>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleType>;
};

export type UserOrderByInput = {
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
};

export enum UserRoleType {
  Admin = 'admin',
  Manager = 'manager',
}

export type UserRoleTypeNullableFilter = {
  equals?: InputMaybe<UserRoleType>;
  in?: InputMaybe<Array<UserRoleType>>;
  not?: InputMaybe<UserRoleTypeNullableFilter>;
  notIn?: InputMaybe<Array<UserRoleType>>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleType>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  role?: InputMaybe<UserRoleTypeNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthenticatedItem: ResolversTypes['User'];
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Color: ResolverTypeWrapper<Color>;
  ColorCreateInput: ColorCreateInput;
  ColorManyRelationFilter: ColorManyRelationFilter;
  ColorOrderByInput: ColorOrderByInput;
  ColorRelateToManyForCreateInput: ColorRelateToManyForCreateInput;
  ColorRelateToManyForUpdateInput: ColorRelateToManyForUpdateInput;
  ColorUpdateArgs: ColorUpdateArgs;
  ColorUpdateInput: ColorUpdateInput;
  ColorWhereInput: ColorWhereInput;
  ColorWhereUniqueInput: ColorWhereUniqueInput;
  CreateInitialUserInput: CreateInitialUserInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FloatFilter: FloatFilter;
  Frame: ResolverTypeWrapper<Frame>;
  FrameCreateInput: FrameCreateInput;
  FrameOrderByInput: FrameOrderByInput;
  FrameUpdateArgs: FrameUpdateArgs;
  FrameUpdateInput: FrameUpdateInput;
  FrameWhereInput: FrameWhereInput;
  FrameWhereUniqueInput: FrameWhereUniqueInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IDFilter: IdFilter;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntFilter: IntFilter;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  KeystoneAdminMeta: ResolverTypeWrapper<KeystoneAdminMeta>;
  KeystoneAdminUIFieldMeta: ResolverTypeWrapper<KeystoneAdminUiFieldMeta>;
  KeystoneAdminUIFieldMetaCreateView: ResolverTypeWrapper<KeystoneAdminUiFieldMetaCreateView>;
  KeystoneAdminUIFieldMetaCreateViewFieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
  KeystoneAdminUIFieldMetaItemView: ResolverTypeWrapper<KeystoneAdminUiFieldMetaItemView>;
  KeystoneAdminUIFieldMetaItemViewFieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
  KeystoneAdminUIFieldMetaListView: ResolverTypeWrapper<KeystoneAdminUiFieldMetaListView>;
  KeystoneAdminUIFieldMetaListViewFieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
  KeystoneAdminUIListMeta: ResolverTypeWrapper<KeystoneAdminUiListMeta>;
  KeystoneAdminUISort: ResolverTypeWrapper<KeystoneAdminUiSort>;
  KeystoneAdminUISortDirection: KeystoneAdminUiSortDirection;
  KeystoneMeta: ResolverTypeWrapper<KeystoneMeta>;
  Mutation: ResolverTypeWrapper<{}>;
  NestedStringFilter: NestedStringFilter;
  OrderDirection: OrderDirection;
  Palette: ResolverTypeWrapper<Palette>;
  PaletteCreateInput: PaletteCreateInput;
  PaletteOrderByInput: PaletteOrderByInput;
  PaletteUpdateArgs: PaletteUpdateArgs;
  PaletteUpdateInput: PaletteUpdateInput;
  PaletteWhereInput: PaletteWhereInput;
  PaletteWhereUniqueInput: PaletteWhereUniqueInput;
  PasswordState: ResolverTypeWrapper<PasswordState>;
  Presale: ResolverTypeWrapper<Presale>;
  PresaleCreateInput: PresaleCreateInput;
  PresaleOrderByInput: PresaleOrderByInput;
  PresaleUpdateArgs: PresaleUpdateArgs;
  PresaleUpdateInput: PresaleUpdateInput;
  PresaleWhereInput: PresaleWhereInput;
  PresaleWhereUniqueInput: PresaleWhereUniqueInput;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  Sale: ResolverTypeWrapper<Sale>;
  SaleCreateInput: SaleCreateInput;
  SaleOrderByInput: SaleOrderByInput;
  SaleUpdateArgs: SaleUpdateArgs;
  SaleUpdateInput: SaleUpdateInput;
  SaleWhereInput: SaleWhereInput;
  SaleWhereUniqueInput: SaleWhereUniqueInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringFilter: StringFilter;
  User: ResolverTypeWrapper<User>;
  UserAuthenticationWithPasswordFailure: ResolverTypeWrapper<UserAuthenticationWithPasswordFailure>;
  UserAuthenticationWithPasswordResult:
    | ResolversTypes['UserAuthenticationWithPasswordFailure']
    | ResolversTypes['UserAuthenticationWithPasswordSuccess'];
  UserAuthenticationWithPasswordSuccess: ResolverTypeWrapper<UserAuthenticationWithPasswordSuccess>;
  UserCreateInput: UserCreateInput;
  UserOrderByInput: UserOrderByInput;
  UserRoleType: UserRoleType;
  UserRoleTypeNullableFilter: UserRoleTypeNullableFilter;
  UserUpdateArgs: UserUpdateArgs;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthenticatedItem: ResolversParentTypes['User'];
  Boolean: Scalars['Boolean'];
  Color: Color;
  ColorCreateInput: ColorCreateInput;
  ColorManyRelationFilter: ColorManyRelationFilter;
  ColorOrderByInput: ColorOrderByInput;
  ColorRelateToManyForCreateInput: ColorRelateToManyForCreateInput;
  ColorRelateToManyForUpdateInput: ColorRelateToManyForUpdateInput;
  ColorUpdateArgs: ColorUpdateArgs;
  ColorUpdateInput: ColorUpdateInput;
  ColorWhereInput: ColorWhereInput;
  ColorWhereUniqueInput: ColorWhereUniqueInput;
  CreateInitialUserInput: CreateInitialUserInput;
  Float: Scalars['Float'];
  FloatFilter: FloatFilter;
  Frame: Frame;
  FrameCreateInput: FrameCreateInput;
  FrameOrderByInput: FrameOrderByInput;
  FrameUpdateArgs: FrameUpdateArgs;
  FrameUpdateInput: FrameUpdateInput;
  FrameWhereInput: FrameWhereInput;
  FrameWhereUniqueInput: FrameWhereUniqueInput;
  ID: Scalars['ID'];
  IDFilter: IdFilter;
  Int: Scalars['Int'];
  IntFilter: IntFilter;
  JSON: Scalars['JSON'];
  KeystoneAdminMeta: KeystoneAdminMeta;
  KeystoneAdminUIFieldMeta: KeystoneAdminUiFieldMeta;
  KeystoneAdminUIFieldMetaCreateView: KeystoneAdminUiFieldMetaCreateView;
  KeystoneAdminUIFieldMetaItemView: KeystoneAdminUiFieldMetaItemView;
  KeystoneAdminUIFieldMetaListView: KeystoneAdminUiFieldMetaListView;
  KeystoneAdminUIListMeta: KeystoneAdminUiListMeta;
  KeystoneAdminUISort: KeystoneAdminUiSort;
  KeystoneMeta: KeystoneMeta;
  Mutation: {};
  NestedStringFilter: NestedStringFilter;
  Palette: Palette;
  PaletteCreateInput: PaletteCreateInput;
  PaletteOrderByInput: PaletteOrderByInput;
  PaletteUpdateArgs: PaletteUpdateArgs;
  PaletteUpdateInput: PaletteUpdateInput;
  PaletteWhereInput: PaletteWhereInput;
  PaletteWhereUniqueInput: PaletteWhereUniqueInput;
  PasswordState: PasswordState;
  Presale: Presale;
  PresaleCreateInput: PresaleCreateInput;
  PresaleOrderByInput: PresaleOrderByInput;
  PresaleUpdateArgs: PresaleUpdateArgs;
  PresaleUpdateInput: PresaleUpdateInput;
  PresaleWhereInput: PresaleWhereInput;
  PresaleWhereUniqueInput: PresaleWhereUniqueInput;
  Query: {};
  Sale: Sale;
  SaleCreateInput: SaleCreateInput;
  SaleOrderByInput: SaleOrderByInput;
  SaleUpdateArgs: SaleUpdateArgs;
  SaleUpdateInput: SaleUpdateInput;
  SaleWhereInput: SaleWhereInput;
  SaleWhereUniqueInput: SaleWhereUniqueInput;
  String: Scalars['String'];
  StringFilter: StringFilter;
  User: User;
  UserAuthenticationWithPasswordFailure: UserAuthenticationWithPasswordFailure;
  UserAuthenticationWithPasswordResult:
    | ResolversParentTypes['UserAuthenticationWithPasswordFailure']
    | ResolversParentTypes['UserAuthenticationWithPasswordSuccess'];
  UserAuthenticationWithPasswordSuccess: UserAuthenticationWithPasswordSuccess;
  UserCreateInput: UserCreateInput;
  UserOrderByInput: UserOrderByInput;
  UserRoleTypeNullableFilter: UserRoleTypeNullableFilter;
  UserUpdateArgs: UserUpdateArgs;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

export type AuthenticatedItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthenticatedItem'] = ResolversParentTypes['AuthenticatedItem']
> = {
  __resolveType: TypeResolveFn<'User', ParentType, ContextType>;
};

export type ColorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Color'] = ResolversParentTypes['Color']
> = {
  blue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  green?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hex?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  red?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FrameResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Frame'] = ResolversParentTypes['Frame']
> = {
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type KeystoneAdminMetaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['KeystoneAdminMeta'] = ResolversParentTypes['KeystoneAdminMeta']
> = {
  enableSessionItem?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enableSignout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  list?: Resolver<
    Maybe<ResolversTypes['KeystoneAdminUIListMeta']>,
    ParentType,
    ContextType,
    RequireFields<KeystoneAdminMetaListArgs, 'key'>
  >;
  lists?: Resolver<Array<ResolversTypes['KeystoneAdminUIListMeta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMeta'] = ResolversParentTypes['KeystoneAdminUIFieldMeta']
> = {
  createView?: Resolver<
    ResolversTypes['KeystoneAdminUIFieldMetaCreateView'],
    ParentType,
    ContextType
  >;
  customViewsIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldMeta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  isFilterable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isOrderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  itemView?: Resolver<
    Maybe<ResolversTypes['KeystoneAdminUIFieldMetaItemView']>,
    ParentType,
    ContextType,
    Partial<KeystoneAdminUiFieldMetaItemViewArgs>
  >;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  listView?: Resolver<ResolversTypes['KeystoneAdminUIFieldMetaListView'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  search?: Resolver<Maybe<ResolversTypes['QueryMode']>, ParentType, ContextType>;
  viewsIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaCreateViewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMetaCreateView'] = ResolversParentTypes['KeystoneAdminUIFieldMetaCreateView']
> = {
  fieldMode?: Resolver<
    ResolversTypes['KeystoneAdminUIFieldMetaCreateViewFieldMode'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaItemViewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMetaItemView'] = ResolversParentTypes['KeystoneAdminUIFieldMetaItemView']
> = {
  fieldMode?: Resolver<
    Maybe<ResolversTypes['KeystoneAdminUIFieldMetaItemViewFieldMode']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaListViewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMetaListView'] = ResolversParentTypes['KeystoneAdminUIFieldMetaListView']
> = {
  fieldMode?: Resolver<
    ResolversTypes['KeystoneAdminUIFieldMetaListViewFieldMode'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiListMetaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['KeystoneAdminUIListMeta'] = ResolversParentTypes['KeystoneAdminUIListMeta']
> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fields?: Resolver<Array<ResolversTypes['KeystoneAdminUIFieldMeta']>, ParentType, ContextType>;
  hideCreate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hideDelete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  initialColumns?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  initialSort?: Resolver<Maybe<ResolversTypes['KeystoneAdminUISort']>, ParentType, ContextType>;
  isHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  itemQueryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelField?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  listQueryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plural?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  singular?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiSortResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['KeystoneAdminUISort'] = ResolversParentTypes['KeystoneAdminUISort']
> = {
  direction?: Resolver<ResolversTypes['KeystoneAdminUISortDirection'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneMetaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['KeystoneMeta'] = ResolversParentTypes['KeystoneMeta']
> = {
  adminMeta?: Resolver<ResolversTypes['KeystoneAdminMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  authenticateUserWithPassword?: Resolver<
    Maybe<ResolversTypes['UserAuthenticationWithPasswordResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationAuthenticateUserWithPasswordArgs, 'email' | 'password'>
  >;
  createColor?: Resolver<
    Maybe<ResolversTypes['Color']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateColorArgs, 'data'>
  >;
  createColors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Color']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateColorsArgs, 'data'>
  >;
  createFrame?: Resolver<
    Maybe<ResolversTypes['Frame']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateFrameArgs, 'data'>
  >;
  createFrames?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Frame']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateFramesArgs, 'data'>
  >;
  createInitialUser?: Resolver<
    ResolversTypes['UserAuthenticationWithPasswordSuccess'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateInitialUserArgs, 'data'>
  >;
  createPalette?: Resolver<
    Maybe<ResolversTypes['Palette']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreatePaletteArgs, 'data'>
  >;
  createPalettes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Palette']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreatePalettesArgs, 'data'>
  >;
  createPresale?: Resolver<
    Maybe<ResolversTypes['Presale']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreatePresaleArgs, 'data'>
  >;
  createPresales?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Presale']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreatePresalesArgs, 'data'>
  >;
  createSale?: Resolver<
    Maybe<ResolversTypes['Sale']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateSaleArgs, 'data'>
  >;
  createSales?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Sale']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateSalesArgs, 'data'>
  >;
  createUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'data'>
  >;
  createUsers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUsersArgs, 'data'>
  >;
  deleteColor?: Resolver<
    Maybe<ResolversTypes['Color']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteColorArgs, 'where'>
  >;
  deleteColors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Color']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteColorsArgs, 'where'>
  >;
  deleteFrame?: Resolver<
    Maybe<ResolversTypes['Frame']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteFrameArgs, 'where'>
  >;
  deleteFrames?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Frame']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteFramesArgs, 'where'>
  >;
  deletePalette?: Resolver<
    Maybe<ResolversTypes['Palette']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeletePaletteArgs, 'where'>
  >;
  deletePalettes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Palette']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeletePalettesArgs, 'where'>
  >;
  deletePresale?: Resolver<
    Maybe<ResolversTypes['Presale']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeletePresaleArgs, 'where'>
  >;
  deletePresales?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Presale']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeletePresalesArgs, 'where'>
  >;
  deleteSale?: Resolver<
    Maybe<ResolversTypes['Sale']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSaleArgs, 'where'>
  >;
  deleteSales?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Sale']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSalesArgs, 'where'>
  >;
  deleteUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'where'>
  >;
  deleteUsers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUsersArgs, 'where'>
  >;
  endSession?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updateColor?: Resolver<
    Maybe<ResolversTypes['Color']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateColorArgs, 'data' | 'where'>
  >;
  updateColors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Color']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateColorsArgs, 'data'>
  >;
  updateFrame?: Resolver<
    Maybe<ResolversTypes['Frame']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateFrameArgs, 'data' | 'where'>
  >;
  updateFrames?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Frame']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateFramesArgs, 'data'>
  >;
  updatePalette?: Resolver<
    Maybe<ResolversTypes['Palette']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePaletteArgs, 'data' | 'where'>
  >;
  updatePalettes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Palette']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePalettesArgs, 'data'>
  >;
  updatePresale?: Resolver<
    Maybe<ResolversTypes['Presale']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePresaleArgs, 'data' | 'where'>
  >;
  updatePresales?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Presale']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePresalesArgs, 'data'>
  >;
  updateSale?: Resolver<
    Maybe<ResolversTypes['Sale']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSaleArgs, 'data' | 'where'>
  >;
  updateSales?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Sale']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSalesArgs, 'data'>
  >;
  updateUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, 'data' | 'where'>
  >;
  updateUsers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUsersArgs, 'data'>
  >;
};

export type PaletteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Palette'] = ResolversParentTypes['Palette']
> = {
  colors?: Resolver<
    Maybe<Array<ResolversTypes['Color']>>,
    ParentType,
    ContextType,
    RequireFields<PaletteColorsArgs, 'orderBy' | 'skip' | 'where'>
  >;
  colorsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<PaletteColorsCountArgs, 'where'>
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PasswordStateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PasswordState'] = ResolversParentTypes['PasswordState']
> = {
  isSet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PresaleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Presale'] = ResolversParentTypes['Presale']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  authenticatedItem?: Resolver<Maybe<ResolversTypes['AuthenticatedItem']>, ParentType, ContextType>;
  color?: Resolver<
    Maybe<ResolversTypes['Color']>,
    ParentType,
    ContextType,
    RequireFields<QueryColorArgs, 'where'>
  >;
  colors?: Resolver<
    Maybe<Array<ResolversTypes['Color']>>,
    ParentType,
    ContextType,
    RequireFields<QueryColorsArgs, 'orderBy' | 'skip' | 'where'>
  >;
  colorsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryColorsCountArgs, 'where'>
  >;
  frame?: Resolver<
    Maybe<ResolversTypes['Frame']>,
    ParentType,
    ContextType,
    RequireFields<QueryFrameArgs, 'where'>
  >;
  frames?: Resolver<
    Maybe<Array<ResolversTypes['Frame']>>,
    ParentType,
    ContextType,
    RequireFields<QueryFramesArgs, 'orderBy' | 'skip' | 'where'>
  >;
  framesCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryFramesCountArgs, 'where'>
  >;
  keystone?: Resolver<ResolversTypes['KeystoneMeta'], ParentType, ContextType>;
  palette?: Resolver<
    Maybe<ResolversTypes['Palette']>,
    ParentType,
    ContextType,
    RequireFields<QueryPaletteArgs, 'where'>
  >;
  palettes?: Resolver<
    Maybe<Array<ResolversTypes['Palette']>>,
    ParentType,
    ContextType,
    RequireFields<QueryPalettesArgs, 'orderBy' | 'skip' | 'where'>
  >;
  palettesCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryPalettesCountArgs, 'where'>
  >;
  presale?: Resolver<
    Maybe<ResolversTypes['Presale']>,
    ParentType,
    ContextType,
    RequireFields<QueryPresaleArgs, 'where'>
  >;
  presales?: Resolver<
    Maybe<Array<ResolversTypes['Presale']>>,
    ParentType,
    ContextType,
    RequireFields<QueryPresalesArgs, 'orderBy' | 'skip' | 'where'>
  >;
  presalesCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryPresalesCountArgs, 'where'>
  >;
  sale?: Resolver<
    Maybe<ResolversTypes['Sale']>,
    ParentType,
    ContextType,
    RequireFields<QuerySaleArgs, 'where'>
  >;
  sales?: Resolver<
    Maybe<Array<ResolversTypes['Sale']>>,
    ParentType,
    ContextType,
    RequireFields<QuerySalesArgs, 'orderBy' | 'skip' | 'where'>
  >;
  salesCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QuerySalesCountArgs, 'where'>
  >;
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, 'where'>
  >;
  users?: Resolver<
    Maybe<Array<ResolversTypes['User']>>,
    ParentType,
    ContextType,
    RequireFields<QueryUsersArgs, 'orderBy' | 'skip' | 'where'>
  >;
  usersCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryUsersCountArgs, 'where'>
  >;
};

export type SaleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Sale'] = ResolversParentTypes['Sale']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['PasswordState']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UserRoleType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthenticationWithPasswordFailureResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserAuthenticationWithPasswordFailure'] = ResolversParentTypes['UserAuthenticationWithPasswordFailure']
> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthenticationWithPasswordResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserAuthenticationWithPasswordResult'] = ResolversParentTypes['UserAuthenticationWithPasswordResult']
> = {
  __resolveType: TypeResolveFn<
    'UserAuthenticationWithPasswordFailure' | 'UserAuthenticationWithPasswordSuccess',
    ParentType,
    ContextType
  >;
};

export type UserAuthenticationWithPasswordSuccessResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserAuthenticationWithPasswordSuccess'] = ResolversParentTypes['UserAuthenticationWithPasswordSuccess']
> = {
  item?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  sessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthenticatedItem?: AuthenticatedItemResolvers<ContextType>;
  Color?: ColorResolvers<ContextType>;
  Frame?: FrameResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  KeystoneAdminMeta?: KeystoneAdminMetaResolvers<ContextType>;
  KeystoneAdminUIFieldMeta?: KeystoneAdminUiFieldMetaResolvers<ContextType>;
  KeystoneAdminUIFieldMetaCreateView?: KeystoneAdminUiFieldMetaCreateViewResolvers<ContextType>;
  KeystoneAdminUIFieldMetaItemView?: KeystoneAdminUiFieldMetaItemViewResolvers<ContextType>;
  KeystoneAdminUIFieldMetaListView?: KeystoneAdminUiFieldMetaListViewResolvers<ContextType>;
  KeystoneAdminUIListMeta?: KeystoneAdminUiListMetaResolvers<ContextType>;
  KeystoneAdminUISort?: KeystoneAdminUiSortResolvers<ContextType>;
  KeystoneMeta?: KeystoneMetaResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Palette?: PaletteResolvers<ContextType>;
  PasswordState?: PasswordStateResolvers<ContextType>;
  Presale?: PresaleResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Sale?: SaleResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAuthenticationWithPasswordFailure?: UserAuthenticationWithPasswordFailureResolvers<ContextType>;
  UserAuthenticationWithPasswordResult?: UserAuthenticationWithPasswordResultResolvers<ContextType>;
  UserAuthenticationWithPasswordSuccess?: UserAuthenticationWithPasswordSuccessResolvers<ContextType>;
};
