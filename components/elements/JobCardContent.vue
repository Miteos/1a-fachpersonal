<template>
  <div>
    <template v-if="!jobHtml">
      <v-card
        v-for="category in categories"
        :key="category.title"
        style="margin-top: 30px"
        class="form_cards_full_radial"
      >
        <v-card-title class="card_header_small">
          <img
            style="padding-right: 18px; padding-left: 10px"
            src="@/static/images/icons/eye.svg"
          />{{ category.title }}
        </v-card-title>
        <template v-for="item in category.items">
          <div v-if="item.content" :key="item.title" class="details_holder">
            <div class="details_holder_left details_holder_p">
              {{ item.title }}
            </div>
            <div class="details_holder_right details_holder_p">
              <span v-if="item.type === 'text'">{{ item.content }}</span>
              <p
                v-else-if="item.type === 'html'"
                style="white-space: pre-wrap"
                v-html="item.content"
              ></p>
            </div>
          </div>
        </template>
      </v-card>
    </template>
    <template v-if="!jobHtml">
      <v-card
        v-for="emp in employee"
        :key="emp.title"
        style="margin-top: 30px"
        class="form_cards_full_radial"
      >
        <v-card-title class="card_header_small">
          <img
            style="padding-right: 18px; padding-left: 10px"
            src="@/static/images/icons/info_e.svg"
          />{{ emp.title }}
        </v-card-title>
        <template v-for="item in emp.items">
          <div v-if="item.content" :key="item.title" class="details_holder">
            <div class="details_holder_left details_holder_p">
              {{ item.title }}
            </div>
            <div class="details_holder_right details_holder_p">
              <span v-if="item.type === 'text'">{{ item.content }}</span>
              <p
                v-else-if="item.type === 'html'"
                style="white-space: pre-wrap"
                v-html="item.content"
              ></p>
            </div>
          </div>
        </template>
      </v-card>
    </template>
    <template v-if="!jobHtml">
      <v-card
        v-for="con in contact"
        :key="con.title"
        style="margin-top: 30px"
        class="form_cards_full_radial"
      >
        <v-card-title class="card_header_small">
          <img
            style="padding-right: 18px; padding-left: 10px"
            src="@/static/images/icons/info_contact.svg"
          />{{ con.title }}
        </v-card-title>
        <template v-for="item in con.items">
          <div v-if="item.content" :key="item.title" class="details_holder">
            <div class="details_holder_left details_holder_p">
              {{ item.title }}
            </div>
            <div class="details_holder_right details_holder_p">
              <span v-if="item.type === 'text'">{{ item.content }}</span>
              <p
                v-else-if="item.type === 'html'"
                style="white-space: pre-wrap"
                v-html="item.content"
              ></p>
            </div>
          </div>
        </template>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    jobBranch: {
      type: String,
      required: false,
    },
    jobDescription: {
      type: String,
      required: false,
    },
    jobContact: {
      type: String,
      required: false,
    },
    jobHzz: {
      type: Boolean,
      required: false,
    },
    jobHtml: {
      type: String,
    },
    jobType: {
      type: String,
      required: false,
    },
    jobCounty: {
      type: String,
      required: false,
    },
    jobCountry: {
      required: false,
      type: String,
    },
    jobLang: {
      type: String,
      required: false,
    },
    jobAddress: {
      required: false,
      type: String,
    },
    jobBranchCounty: {
      required: false,
      type: String,
    },
    jobPostal: {
      required: false,
      type: String,
    },
    jobCity: {
      required: false,
      type: String,
    },
    jobSpecial: {
      required: false,
      type: String,
    },
    jobReqs: {
      required: false,
      type: String,
    },
    jobMinQual: {
      required: false,
      type: String,
    },
    jobLicence: {
      required: false,
      type: String,
    },
    jobLocation: {
      type: String,
      required: false,
    },
    jobExp: {
      required: false,
      type: Number,
    },
  },
  data() {
    return {
      categories: [
        {
          icon: '',
          title: 'O poslu',
          items: [
            {
              title: 'Opis radnog mjesta',
              type: 'html',
              content: this.jobDescription,
            },
            {
              title: 'Vrsta posla:',
              type: 'text',
              content: this.jobType,
            },
            {
              title: 'Županija:',
              type: 'text',
              content: this.jobCounty,
            },
            {
              title: 'Država:',
              type: 'text',
              content: this.jobLocation,
            },
          ],
        },
      ],
      employee: [
        {
          icon: '',
          title: 'O zaposleniku',
          items: [
            {
              title: 'Znanja i kvalifikacije:',
              type: 'html',
              content: this.jobReqs,
            },
            {
              title: 'Minimalna stručna sprema:',
              type: 'text',
              content: this.jobMinQual ? this.jobMinQual.name : null,
            },
            {
              title: 'Jezik:',
              type: 'text',
              content: this.jobLang,
            },
            {
              title: 'Vozačka dozvola:',
              type: 'text',
              content: this.jobLicence,
            },
            {
              title: 'Potrebno radno iskustvo::',
              type: 'text',
              content: this.jobExp + ' godina',
            },
          ],
        },
      ],
      contact: [
        {
          icon: '',
          title: 'Kontakt podaci',
          items: [
            {
              title: 'Naziv poduzeća:',
              type: 'text',
              content: this.jobBranch,
            },
            {
              title: 'Adresa:',
              type: 'text',
              content:
                this.jobAddress + ', ' + this.jobPostal + ' ' + this.jobCity,
            },
            {
              title: 'Županija:',
              type: 'text',
              content: this.jobCounty,
            },
            {
              title: 'Država:',
              type: 'text',
              content: '',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.disclaimer_left {
  width: 16%;
}
.disclaimer_right {
  width: 84%;
  font-weight: 400;
}
.social_imgs img {
  width: 70px !important;
  padding: 20px 10px 10px;
}
.print_btn {
  text-transform: none;
  text-align: center;
  text-indent: 0;
  border-radius: 100px;
  font-weight: 400;
  font-size: 16px;
  padding: 4.5px 30px;
  position: relative;
  -o-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  background-size: 200% 100%;
  color: #fff;
  -webkit-box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
  text-shadow: none;
  border: 0;
  width: 300px;
  max-width: 100%;
  background: #fff !important;
  margin: 0 0 32px;
  display: inline-block;
  height: 50px;
  margin: 20px 0 10px;
}
.print_btn:hover {
  background-color: #2f9de0 !important;
  color: #fff;
}
.social_card_form {
  width: 100%;
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 18px;
  text-align: center;
  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  box-sizing: border-box;
  border-radius: 13px;
  padding: 20px 5px;
  min-height: 100px;
}
.social_card_form a {
  height: 80px !important;
}
.details_holder {
  padding: 0 35px;
  border-bottom: 1px solid #ededed;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  font-weight: 400;
  font-size: 0;
  @media only screen and (max-width: 860px) {
    padding: 0 20px;
  }
  @media only screen and (max-width: 480px) {
    padding: 0 15px;
  }
}
.details_holder_left {
  width: 30%;
  font-weight: 400;
  @media only screen and (max-width: 680px) {
    width: 100%;
    font-size: 14px !important;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;
    font-weight: 900;
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
    font-size: 14px !important;
  }
}
.details_holder_right {
  @media only screen and (max-width: 680px) {
    width: 100%;
    font-size: 14px !important;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 5px !important;
    font-size: 14px !important;
    padding-top: 0 !important;
  }
}
.details_holder_p {
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: top;
  margin: 18px 0;
  letter-spacing: 0.015em;
  font-size: 16px;
  line-height: 1.4em;
  word-break: break-word;
  p {
    letter-spacing: 0.2px;
    text-align: left !important;
    font-weight: 100;
    color: #333333;
    padding: 0 !important;
    word-break: break-word;
    @media only screen and (max-width: 420px) {
      padding: 0 !important;
    }
  }
  b {
    font-weight: 700;
  }
  .form_cards_full_radial {
    border-radius: 13px !important;
    margin-bottom: 35px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1) !important;
  }
}
.card_header_small {
  height: 78px;
  border: 1px solid #ededed;
}
</style>
