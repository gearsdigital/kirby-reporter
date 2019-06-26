(function () {var a={name:"IssueForm",data:()=>({errors:[],response:{},loading:!1,issue:{title:null,description:null}}),computed:{hasResponse(){return Object.keys(this.response).length>1},buttonIcon(){return this.loading?"loader":"check"},successMessage(){return this.$t("reporter.form.success",{issueLink:this.issueLink})},issueLink(){const s=this.response.issueUrl,t=this.response.issueId;return this.$t("reporter.form.issue.link",{issueLink:s,issueId:t})}},methods:{isLoading(s){this.loading=s},checkForm(){this.errors=[],!this.issue.title&&this.issue.title<3&&this.errors.push(this.$t("reporter.form.error.title")),this.errors.length||this.submit()},submit(){this.loading=!0;const s=this.$api.post("kirby-reporter",this.issue);s.then(s=>{s.status>=200&&s.status<300?(this.response=s,this.issue={},this.$store.dispatch("notification/success",":)")):401===s.status?(this.errors.push(this.$t("reporter.form.error.authFailed")),this.response={}):404===s.status?(this.errors.push(this.$t("reporter.form.error.repoNotFound")),this.response={}):501===s.status?(this.errors.push(this.$t("reporter.form.error.platform.unsupported")),this.response={}):this.response={},this.loading=!1}),s.catch(s=>{this.errors.push(this.$t(s.message)),this.loading=!1,this.response={}})}}};if(typeof a==="function"){a=a.options}Object.assign(a,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"k-kit-form"},[_vm.errors.length?_c("k-box",{staticClass:"k-kit-form--note",attrs:{"theme":"negative"}},[_c("k-icon",{attrs:{"type":"alert"}}),_vm._v(" "),_vm._l(_vm.errors,function(error){return _c("p",[_vm._v(_vm._s(error))])})],2):_vm._e(),_vm._v(" "),_vm.hasResponse?_c("k-box",{staticClass:"k-kit-form--note",attrs:{"theme":"positive"}},[_c("k-icon",{attrs:{"type":"check"}}),_vm._v(" "),_c("p",{domProps:{"innerHTML":_vm._s(_vm.successMessage)}})],1):_vm._e(),_vm._v(" "),_c("k-form",{attrs:{"fields":{title:{label:_vm.$t("reporter.form.field.title"),minlength:3,type:"text",required:true,disabled:this.loading},description:{label:_vm.$t("reporter.form.field.description"),help:_vm.$t("reporter.form.field.description.help"),required:false,disabled:this.loading,type:"textarea",buttons:false},line:{type:"line"}}},on:{"submit":function($event){$event.preventDefault();return _vm.checkForm($event)}},model:{value:_vm.issue,callback:function($$v){_vm.issue=$$v},expression:"issue"}}),_vm._v(" "),_c("k-button",{class:{"is-loading":_vm.loading},attrs:{"disabled":_vm.loading,"icon":_vm.buttonIcon},on:{"click":_vm.checkForm}},[_vm._v(_vm._s(_vm.$t("reporter.form.button.save")))])],1)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());var b={components:{IssueForm:a}};if(typeof b==="function"){b=b.options}Object.assign(b,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("k-view",{staticClass:"k-issue-tracker-view"},[_c("k-header",[_vm._v(_vm._s(_vm.$t("reporter.headline")))]),_vm._v(" "),_c("k-text",[_vm._v(_vm._s(_vm.$t("reporter.description")))]),_vm._v(" "),_c("issue-form")],1)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());panel.plugin("gearsdigital/kirby-reporter",{views:{"issue-tracker":{component:b,icon:"bolt"}}});})();