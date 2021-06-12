Vue.component("v-annotation-facet", {
  props: ["tags"],
  delimiters: ["[[", "]]"],
  data: function () {
    return {
      count: 0,
      checkedTags: [],
    };
  },
  computed: {
    // a computed getter
    annotationTags: function () {
      var filteredTags = this.tags.split(",");
      return filteredTags
        .filter((item, i, ar) => ar.indexOf(item) === i)
        .filter(Boolean);
    },
  },
  methods: {
    selectAll: function (event) {
      this.checkedTags = this.annotationTags;
    },
    selectNone: function (event) {
      this.checkedTags = [];
    },
  },

  template: `
    <div>
      <ul class="uk-list">
        <li v-for="tag in annotationTags" :key="tag">
          <label class="v-tag-label">
            <input class="uk-checkbox" type="checkbox" :id="tag" :value="tag" v-model="checkedTags"> [[tag]]
          </label>
        </li>
      </ul>

      <button class="uk-button uk-button-primary uk-button-small" @click="selectAll">Select all</button>
      <button class="uk-button uk-button-default uk-button-small" @click="selectNone">Select none</button>

      <!--<div> selected items: [[checkedTags]] </div>-->
    </div>
    `,
});

Vue.component("v-list", {
  props: ["annotations"],
  delimiters: ["[[", "]]"],
  data: function () {
    return {
      count: 0,
    };
  },
  template: `
        <div>
            
        </div>
        `,
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
var app = new Vue({
  delimiters: ["[[", "]]"],
  data: {
    title: "Wow",
  },
}).$mount("#app");
