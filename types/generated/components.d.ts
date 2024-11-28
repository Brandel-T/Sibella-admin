import type { Schema, Struct } from '@strapi/strapi';

export interface ControlsInputField extends Struct.ComponentSchema {
  collectionName: 'components_controls_input_fields';
  info: {
    description: '';
    displayName: 'InputField';
  };
  attributes: {
    label: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.Enumeration<
      [
        'firstname',
        'lastname',
        'email',
        'tel',
        'subject',
        'message',
        'agreements',
      ]
    > &
      Schema.Attribute.Required;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<
      ['email', 'text', 'tel', 'textarea', 'checkbox', 'button']
    > &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface ControlsSelect extends Struct.ComponentSchema {
  collectionName: 'components_controls_selects';
  info: {
    description: '';
    displayName: 'Select';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    options: Schema.Attribute.Relation<'oneToMany', 'api::genre.genre'>;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface DynamicZoneCta extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_ctas';
  info: {
    description: '';
    displayName: 'CTA';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'ui.button', true>;
    heading: Schema.Attribute.Text & Schema.Attribute.Required;
    sub_heading: Schema.Attribute.Text;
  };
}

export interface DynamicZoneHero extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    cover_image: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    ctas: Schema.Attribute.Component<'ui.button', true>;
    heading: Schema.Attribute.Text & Schema.Attribute.Required;
    sub_heading: Schema.Attribute.Text;
  };
}

export interface DynamicZoneSlidingGallery extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_sliding_galleries';
  info: {
    description: '';
    displayName: 'SlidingGallery';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files' | 'videos', true> &
      Schema.Attribute.Required;
    speed: Schema.Attribute.Integer;
  };
}

export interface GlobalsFooter extends Struct.ComponentSchema {
  collectionName: 'components_globals_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.logo', false> &
      Schema.Attribute.Required;
  };
}

export interface GlobalsNavbar extends Struct.ComponentSchema {
  collectionName: 'components_globals_navbars';
  info: {
    description: '';
    displayName: 'Navbar';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Component<'shared.logo', false>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    displayName: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_blank', '_parent']>;
    url: Schema.Attribute.Text;
  };
}

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Sibella'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Schema.Attribute.Text;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    metaRobots: Schema.Attribute.Text;
    metaSocial: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.Text;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    iconName: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    redirect_to: Schema.Attribute.Component<'shared.link', false>;
    theme: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface UiContactServicePerson extends Struct.ComponentSchema {
  collectionName: 'components_ui_contact_service_people';
  info: {
    description: '';
    displayName: 'ContactServicePersonCol';
    icon: 'alien';
  };
  attributes: {
    cateringSupport: Schema.Attribute.Component<'ui.footer-col', false>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    rentalSupport: Schema.Attribute.Component<'ui.footer-col', false>;
  };
}

export interface UiCrockeryCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_crockery_cards';
  info: {
    displayName: 'CrockeryCard';
    icon: 'shoppingCart';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
  };
}

export interface UiElectronicCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_electronic_cards';
  info: {
    description: '';
    displayName: 'ElectronicCard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    image_description: Schema.Attribute.String;
    pack_description: Schema.Attribute.Text;
    pack_name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface UiFooterCol extends Struct.ComponentSchema {
  collectionName: 'components_ui_footer_cols';
  info: {
    displayName: 'FooterCol';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface UiRentalCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_rental_cards';
  info: {
    description: '';
    displayName: 'RentalCategory';
    icon: 'calendar';
  };
  attributes: {
    cta: Schema.Attribute.Component<'dynamic-zone.cta', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface UiServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_service_cards';
  info: {
    description: '';
    displayName: 'ServiceCard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    imageDescription: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Sibella: service image'>;
    redirect_to: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'title is missing'>;
  };
}

export interface UiTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_testimonial_cards';
  info: {
    description: '';
    displayName: 'TestimonialCard';
  };
  attributes: {
    author_description: Schema.Attribute.String;
    author_name: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'controls.input-field': ControlsInputField;
      'controls.select': ControlsSelect;
      'dynamic-zone.cta': DynamicZoneCta;
      'dynamic-zone.hero': DynamicZoneHero;
      'dynamic-zone.sliding-gallery': DynamicZoneSlidingGallery;
      'globals.footer': GlobalsFooter;
      'globals.navbar': GlobalsNavbar;
      'shared.link': SharedLink;
      'shared.logo': SharedLogo;
      'shared.seo': SharedSeo;
      'ui.button': UiButton;
      'ui.contact-service-person': UiContactServicePerson;
      'ui.crockery-card': UiCrockeryCard;
      'ui.electronic-card': UiElectronicCard;
      'ui.footer-col': UiFooterCol;
      'ui.rental-card': UiRentalCard;
      'ui.service-card': UiServiceCard;
      'ui.testimonial-card': UiTestimonialCard;
    }
  }
}
