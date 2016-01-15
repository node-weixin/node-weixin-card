module.exports = {
  coupon: {
    create: {
      card_type: {
        type: 'string',
        maxLength: 24,
        required: true
      },
      sku: {
        quantity: {
          type: 'int',
          required: true
        }
      },
      data_info: {
        type: {
          type: 'string',
          required: true
        },
        begin_timestamp: {
          type: 'int',
          required: true
        },
        end_timestamp: {
          type: 'int',
          required: true
        }
      },
      base_info: {
        logo_url: {
          type: 'url',
          maxLength: 128,
          required: true
        },
        code_type: {
          type: 'string',
          maxLength: 32,
          required: true
        },
        brand_name: {
          type: 'string',
          maxLength: 36,
          required: true
        },
        title: {
          type: 'string',
          maxLength: 27,
          required: true
        },
        sub_title: {
          type: 'string',
          maxLength: 54,
          required: true
        },
        color: {
          type: 'string',
          maxLength: 16,
          required: true
        },
        notice: {
          type: 'string',
          maxLength: 48,
          required: true
        },
        description: {
          type: 'string',
          maxLength: 3072,
          required: true
        },
        fixed_term: {
          type: 'int'
        },
        fixed_begin_term: {
          type: 'int'
        },
        end_timestamp: {
          type: 'int'
        },
        use_custom_code: {
          type: 'boolean'
        },
        bind_openid: {
          type: 'boolean'
        },
        service_phone: {
          type: 'string',
          maxLength: 24
        },
        location_id_list: {
          type: 'array'
        },
        source: {
          type: 'string',
          maxLength: 36
        },
        custom_url_name: {
          type: 'string',
          maxLength: 15
        },
        center_title: {
          type: 'string',
          maxLength: 18
        },
        center_sub_title: {
          type: 'string',
          maxLength: 24
        },
        center_url: {
          type: 'string',
          maxLength: 128
        },
        custom_url: {
          type: 'string',
          maxLength: 128
        },
        custom_url_sub_title: {
          type: 'string',
          maxLength: 18
        },
        promotion_url_name: {
          type: 'string',
          maxLength: 15
        },
        promotion_url: {
          type: 'string',
          maxLength: 128
        },
        promotion_url_sub_title: {
          type: 'string',
          maxLength: 18
        },
        get_limit: {
          type: 'int',
          maxLength: 1
        },
        can_share: {
          type: 'boolean'
        },
        can_give_friend: {
          type: 'boolean'
        }
      },
      groupon: {
        deal_detail: {
          type: 'string',
          maxLength: 24,
          required: true
        }
      },
      cash: {
        least_cost: {
          type: 'int',
          required: true
        },
        reduce_cost: {
          type: 'int',
          required: true
        }
      },
      discount: {
        discount: {
          type: 'int',
          required: true
        }
      },
      gift: {
        gift: {
          type: 'string',
          maxLength: 3072,
          required: true
        }
      },
      general_coupon: {
        default_detail: {
          type: 'string',
          maxLength: 3072,
          required: true
        }
      }
    },
    landing: {
      create: {
        banner: {
          type: 'string',
          required: true
        },
        page_title: {
          type: 'string',
          required: true
        },
        can_share: {
          required: true
        },
        scene: {
          type: 'string',
          maxLength: 128,
          required: true
        },
        card_list: {
          required: true
        }
      },
      card: {
        cardid: {
          type: 'string',
          required: true
        },
        thumb_url: {
          type: 'url',
          required: true
        }
      }

    },
    qrcode: {
      create: {
        code: {
          type: 'string',
          maxLength: 128,
          required: true
        },
        card_id: {
          type: 'string',
          maxLength: 128
        },
        openid: {
          type: 'string',
          maxLength: 128
        },
        expire_seconds: {
          type: 'int'
        },
        outer_id: {
          type: 'int'
        }
      }
    },
    update: {
      base_info: {
        logo_url: {
          type: 'url',
          maxLength: 128,
          required: true
        },
        notice: {
          type: 'string',
          maxLength: 48,
          required: true
        },
        description: {
          type: 'string',
          maxLength: 3072,
          required: true
        },
        service_phone: {
          type: 'string',
          maxLength: 24
        },
        color: {
          type: 'string',
          maxLength: 3072,
          required: true
        },
        location_id_list: {
          type: 'array'
        },
        center_title: {
          type: 'string',
          maxLength: 18
        },
        center_sub_title: {
          type: 'string',
          maxLength: 24
        },
        center_url: {
          type: 'string',
          maxLength: 128
        },
        custom_url_name: {
          type: 'string',
          maxLength: 16
        },
        custom_url: {
          type: 'string',
          maxLength: 128
        },
        custom_url_sub_title: {
          type: 'string',
          maxLength: 18
        },
        promotion_url_name: {
          type: 'string',
          maxLength: 16
        },
        promotion_url: {
          type: 'string',
          maxLength: 128
        },
        promotion_url_sub_title: {
          type: 'string',
          maxLength: 18
        },
        code_type: {
          type: 'string',
          maxLength: 16
        },
        get_limit: {
          type: 'int'
        },
        can_share: {
          type: 'boolean'
        },
        can_give_friend: {
          type: 'boolean'
        }
      }
    }
  },
  logo: {
    buffer: {
      required: true
    }
  }
};
