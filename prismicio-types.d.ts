// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AssetsDocumentDataSlicesSlice =
  | CtaSectionSlice
  | HoveCardSlice
  | FaqSlice
  | RichTextSlice
  | StandOutSlice;

/**
 * Content for Assets documents
 */
interface AssetsDocumentData {
  /**
   * Asset field in *Assets*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: assets.asset
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  asset: prismic.RichTextField;

  /**
   * stats data field in *Assets*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: assets.stats_data
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  stats_data: prismic.RichTextField;

  /**
   * image field in *Assets*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: assets.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Description field in *Assets*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: assets.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Slice Zone field in *Assets*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: assets.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AssetsDocumentDataSlicesSlice> /**
   * Meta Title field in *Assets*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: assets.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Assets*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: assets.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Assets*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: assets.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Assets document from Prismic
 *
 * - **API ID**: `assets`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AssetsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<AssetsDocumentData>, "assets", Lang>;

type ContactUsDocumentDataSlicesSlice = never;

/**
 * Content for Contact us documents
 */
interface ContactUsDocumentData {
  /**
   * Heading field in *Contact us*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us.heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Slice Zone field in *Contact us*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ContactUsDocumentDataSlicesSlice> /**
   * Meta Title field in *Contact us*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: contact_us.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Contact us*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: contact_us.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Contact us*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Contact us document from Prismic
 *
 * - **API ID**: `contact_us`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactUsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ContactUsDocumentData>,
    "contact_us",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | HeadingHeroSlice
  | StandOutSlice
  | FeaturesSlice
  | AssetShowcaseSlice
  | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → Policies*
 */
export interface SettingsDocumentDataPoliciesItem {
  /**
   * link to policies field in *Settings → Policies*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.policies[].link_to_policies
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_to_policies: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * label field in *Settings → Policies*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.policies[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Settings → Contact Information*
 */
export interface SettingsDocumentDataContactInformationItem {
  /**
   * Contact Information field in *Settings → Contact Information*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.contact_information[].contact_information
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  contact_information: prismic.RichTextField;
}

/**
 * Item in *Settings → Company*
 */
export interface SettingsDocumentDataCompanyItem {
  /**
   * link to company field in *Settings → Company*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.company[].link_to_company
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_to_company: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * label field in *Settings → Company*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.company[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Settings → Our Services*
 */
export interface SettingsDocumentDataOurServicesItem {
  /**
   * Link to services field in *Settings → Our Services*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.our_services[].link_to_services
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_to_services: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * label field in *Settings → Our Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.our_services[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Policies field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.policies[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  policies: prismic.GroupField<Simplify<SettingsDocumentDataPoliciesItem>>;

  /**
   * Contact Information field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.contact_information[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  contact_information: prismic.GroupField<
    Simplify<SettingsDocumentDataContactInformationItem>
  >;

  /**
   * Company field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.company[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  company: prismic.GroupField<Simplify<SettingsDocumentDataCompanyItem>>;

  /**
   * Our Services field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.our_services[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  our_services: prismic.GroupField<
    Simplify<SettingsDocumentDataOurServicesItem>
  >;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | AssetsDocument
  | ContactUsDocument
  | PageDocument
  | SettingsDocument;

/**
 * Item in *AssetShowcase → Default → Primary → Assets*
 */
export interface AssetShowcaseSliceDefaultPrimaryAssetsItem {
  /**
   * Asset field in *AssetShowcase → Default → Primary → Assets*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: asset_showcase.default.primary.assets[].asset
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  asset: prismic.ContentRelationshipField<"assets">;
}

/**
 * Primary content in *AssetShowcase → Default → Primary*
 */
export interface AssetShowcaseSliceDefaultPrimary {
  /**
   * Heading field in *AssetShowcase → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: asset_showcase.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Assets field in *AssetShowcase → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: asset_showcase.default.primary.assets[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  assets: prismic.GroupField<
    Simplify<AssetShowcaseSliceDefaultPrimaryAssetsItem>
  >;
}

/**
 * Default variation for AssetShowcase Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AssetShowcaseSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AssetShowcaseSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AssetShowcase*
 */
type AssetShowcaseSliceVariation = AssetShowcaseSliceDefault;

/**
 * AssetShowcase Shared Slice
 *
 * - **API ID**: `asset_showcase`
 * - **Description**: AssetShowcase
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AssetShowcaseSlice = prismic.SharedSlice<
  "asset_showcase",
  AssetShowcaseSliceVariation
>;

/**
 * Primary content in *CtaSection → Default → Primary*
 */
export interface CtaSectionSliceDefaultPrimary {
  /**
   * background image field in *CtaSection → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_section.default.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Heading field in *CtaSection → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_section.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *CtaSection → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_section.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * link field in *CtaSection → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_section.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * label field in *CtaSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_section.default.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Default variation for CtaSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CtaSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CtaSection*
 */
type CtaSectionSliceVariation = CtaSectionSliceDefault;

/**
 * CtaSection Shared Slice
 *
 * - **API ID**: `cta_section`
 * - **Description**: CtaSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaSectionSlice = prismic.SharedSlice<
  "cta_section",
  CtaSectionSliceVariation
>;

/**
 * Item in *Faq → Default → Primary → Questions*
 */
export interface FaqSliceDefaultPrimaryQuestionsItem {
  /**
   * question field in *Faq → Default → Primary → Questions*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.questions[].question
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  question: prismic.RichTextField;

  /**
   * answer field in *Faq → Default → Primary → Questions*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.questions[].answer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  answer: prismic.RichTextField;
}

/**
 * Item in *Faq → OnlyHeading → Primary → Questions*
 */
export interface FaqSliceOnlyHeadingPrimaryQuestionsItem {
  /**
   * question field in *Faq → OnlyHeading → Primary → Questions*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.onlyHeading.primary.questions[].question
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  question: prismic.RichTextField;

  /**
   * answer field in *Faq → OnlyHeading → Primary → Questions*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.onlyHeading.primary.questions[].answer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  answer: prismic.RichTextField;
}

/**
 * Primary content in *Faq → Default → Primary*
 */
export interface FaqSliceDefaultPrimary {
  /**
   * Heading field in *Faq → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Faq → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Questions field in *Faq → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.questions[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  questions: prismic.GroupField<Simplify<FaqSliceDefaultPrimaryQuestionsItem>>;
}

/**
 * Default variation for Faq Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FaqSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Faq → OnlyHeading → Primary*
 */
export interface FaqSliceOnlyHeadingPrimary {
  /**
   * Heading field in *Faq → OnlyHeading → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.onlyHeading.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Questions field in *Faq → OnlyHeading → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.onlyHeading.primary.questions[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  questions: prismic.GroupField<
    Simplify<FaqSliceOnlyHeadingPrimaryQuestionsItem>
  >;
}

/**
 * OnlyHeading variation for Faq Slice
 *
 * - **API ID**: `onlyHeading`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSliceOnlyHeading = prismic.SharedSliceVariation<
  "onlyHeading",
  Simplify<FaqSliceOnlyHeadingPrimary>,
  never
>;

/**
 * Slice variation for *Faq*
 */
type FaqSliceVariation = FaqSliceDefault | FaqSliceOnlyHeading;

/**
 * Faq Shared Slice
 *
 * - **API ID**: `faq`
 * - **Description**: Faq
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSlice = prismic.SharedSlice<"faq", FaqSliceVariation>;

/**
 * Item in *Features → Default → Primary → Feature*
 */
export interface FeaturesSliceDefaultPrimaryFeatureItem {
  /**
   * Title field in *Features → Default → Primary → Feature*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.feature[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Features → Default → Primary → Feature*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.feature[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * HasImage field in *Features → Default → Primary → Feature*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: features.default.primary.feature[].hasimage
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  hasimage: prismic.BooleanField;

  /**
   * FeatureIndex field in *Features → Default → Primary → Feature*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.feature[].featureindex
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  featureindex: prismic.SelectField<"First" | "Second" | "Third" | "Fourth">;

  /**
   * image field in *Features → Default → Primary → Feature*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.feature[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Item in *Features → Default → Primary → MultipleImages*
 */
export interface FeaturesSliceDefaultPrimaryMultipleimagesItem {
  /**
   * Icon field in *Features → Default → Primary → MultipleImages*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.multipleimages[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"Invest" | "Earn" | "RaiseCapital" | "Diversify">;
}

/**
 * Primary content in *Features → Default → Primary*
 */
export interface FeaturesSliceDefaultPrimary {
  /**
   * Heading field in *Features → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *Features → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Feature field in *Features → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.feature[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  feature: prismic.GroupField<Simplify<FeaturesSliceDefaultPrimaryFeatureItem>>;

  /**
   * MultipleImages field in *Features → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.multipleimages[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  multipleimages: prismic.GroupField<
    Simplify<FeaturesSliceDefaultPrimaryMultipleimagesItem>
  >;
}

/**
 * Default variation for Features Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Features*
 */
type FeaturesSliceVariation = FeaturesSliceDefault;

/**
 * Features Shared Slice
 *
 * - **API ID**: `features`
 * - **Description**: Features
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSlice = prismic.SharedSlice<
  "features",
  FeaturesSliceVariation
>;

/**
 * Primary content in *HeadingHero → Default → Primary*
 */
export interface HeadingHeroSliceDefaultPrimary {
  /**
   * PageType field in *HeadingHero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: heading_hero.default.primary.pagetype
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  pagetype: prismic.TitleField;

  /**
   * Heading field in *HeadingHero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Body
   * - **API ID Path**: heading_hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *HeadingHero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: heading_hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * image field in *HeadingHero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: heading_hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for HeadingHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeadingHeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeadingHero*
 */
type HeadingHeroSliceVariation = HeadingHeroSliceDefault;

/**
 * HeadingHero Shared Slice
 *
 * - **API ID**: `heading_hero`
 * - **Description**: HeadingHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingHeroSlice = prismic.SharedSlice<
  "heading_hero",
  HeadingHeroSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Cta Link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * link label field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.link_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_label: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *HoveCard → Default → Primary → Card*
 */
export interface HoveCardSliceDefaultPrimaryCardItem {
  /**
   * Heading field in *HoveCard → Default → Primary → Card*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hove_card.default.primary.card[].heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *HoveCard → Default → Primary → Card*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hove_card.default.primary.card[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Primary content in *HoveCard → Default → Primary*
 */
export interface HoveCardSliceDefaultPrimary {
  /**
   * Card field in *HoveCard → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hove_card.default.primary.card[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  card: prismic.GroupField<Simplify<HoveCardSliceDefaultPrimaryCardItem>>;
}

/**
 * Default variation for HoveCard Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HoveCardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HoveCardSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HoveCard*
 */
type HoveCardSliceVariation = HoveCardSliceDefault;

/**
 * HoveCard Shared Slice
 *
 * - **API ID**: `hove_card`
 * - **Description**: HoveCard
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HoveCardSlice = prismic.SharedSlice<
  "hove_card",
  HoveCardSliceVariation
>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Item in *StandOut → Default → Primary → Cards*
 */
export interface StandOutSliceDefaultPrimaryCardsItem {
  /**
   * Heading field in *StandOut → Default → Primary → Cards*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: stand_out.default.primary.cards[].heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Description field in *StandOut → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: stand_out.default.primary.cards[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Icon field in *StandOut → Default → Primary → Cards*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: stand_out.default.primary.cards[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<
    | "security"
    | "focused"
    | "tokenized"
    | "complete"
    | "unmatched"
    | "growth"
    | "compliance"
    | "scalable"
  >;
}

/**
 * Item in *StandOut → FourCards → Primary → Cards*
 */
export interface StandOutSliceFourCardsPrimaryCardsItem {
  /**
   * Heading field in *StandOut → FourCards → Primary → Cards*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: stand_out.fourCards.primary.cards[].heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Description field in *StandOut → FourCards → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: stand_out.fourCards.primary.cards[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Icon field in *StandOut → FourCards → Primary → Cards*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: stand_out.fourCards.primary.cards[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<
    "security" | "compliance" | "tokenized" | "focused"
  >;
}

/**
 * Primary content in *StandOut → Default → Primary*
 */
export interface StandOutSliceDefaultPrimary {
  /**
   * Title field in *StandOut → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: stand_out.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Cards field in *StandOut → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: stand_out.default.primary.cards[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cards: prismic.GroupField<Simplify<StandOutSliceDefaultPrimaryCardsItem>>;
}

/**
 * Default variation for StandOut Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StandOutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<StandOutSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *StandOut → FourCards → Primary*
 */
export interface StandOutSliceFourCardsPrimary {
  /**
   * Title field in *StandOut → FourCards → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: stand_out.fourCards.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Cards field in *StandOut → FourCards → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: stand_out.fourCards.primary.cards[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cards: prismic.GroupField<Simplify<StandOutSliceFourCardsPrimaryCardsItem>>;
}

/**
 * FourCards variation for StandOut Slice
 *
 * - **API ID**: `fourCards`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StandOutSliceFourCards = prismic.SharedSliceVariation<
  "fourCards",
  Simplify<StandOutSliceFourCardsPrimary>,
  never
>;

/**
 * Slice variation for *StandOut*
 */
type StandOutSliceVariation = StandOutSliceDefault | StandOutSliceFourCards;

/**
 * StandOut Shared Slice
 *
 * - **API ID**: `stand_out`
 * - **Description**: StandOut
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StandOutSlice = prismic.SharedSlice<
  "stand_out",
  StandOutSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AssetsDocument,
      AssetsDocumentData,
      AssetsDocumentDataSlicesSlice,
      ContactUsDocument,
      ContactUsDocumentData,
      ContactUsDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataPoliciesItem,
      SettingsDocumentDataContactInformationItem,
      SettingsDocumentDataCompanyItem,
      SettingsDocumentDataOurServicesItem,
      AllDocumentTypes,
      AssetShowcaseSlice,
      AssetShowcaseSliceDefaultPrimaryAssetsItem,
      AssetShowcaseSliceDefaultPrimary,
      AssetShowcaseSliceVariation,
      AssetShowcaseSliceDefault,
      CtaSectionSlice,
      CtaSectionSliceDefaultPrimary,
      CtaSectionSliceVariation,
      CtaSectionSliceDefault,
      FaqSlice,
      FaqSliceDefaultPrimaryQuestionsItem,
      FaqSliceDefaultPrimary,
      FaqSliceOnlyHeadingPrimaryQuestionsItem,
      FaqSliceOnlyHeadingPrimary,
      FaqSliceVariation,
      FaqSliceDefault,
      FaqSliceOnlyHeading,
      FeaturesSlice,
      FeaturesSliceDefaultPrimaryFeatureItem,
      FeaturesSliceDefaultPrimaryMultipleimagesItem,
      FeaturesSliceDefaultPrimary,
      FeaturesSliceVariation,
      FeaturesSliceDefault,
      HeadingHeroSlice,
      HeadingHeroSliceDefaultPrimary,
      HeadingHeroSliceVariation,
      HeadingHeroSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HoveCardSlice,
      HoveCardSliceDefaultPrimaryCardItem,
      HoveCardSliceDefaultPrimary,
      HoveCardSliceVariation,
      HoveCardSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      StandOutSlice,
      StandOutSliceDefaultPrimaryCardsItem,
      StandOutSliceDefaultPrimary,
      StandOutSliceFourCardsPrimaryCardsItem,
      StandOutSliceFourCardsPrimary,
      StandOutSliceVariation,
      StandOutSliceDefault,
      StandOutSliceFourCards,
    };
  }
}
