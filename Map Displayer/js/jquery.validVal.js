﻿/*	 *	jQuery validVal version 4.0.2 *	demo's and documentation: *	validval.frebsite.nl * *	Copyright (c) 2011 Fred Heusschen *	www.frebsite.nl * *	Dual licensed under the MIT and GPL licenses. *	http://en.wikipedia.org/wiki/MIT_License *	http://en.wikipedia.org/wiki/GNU_General_Public_License */eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6($){5($.X.S){7}$.X.S=$.X.3h=6(o,c){5(F.y>1){7 F.1j(6(){$(F).S(o,c)})}x u,8,1w,1k;u=F;8=$.1x(E,{},$.X.S.2o,o);1w=$.1x(E,{},$.X.S.2p,c);1k=\'1y:2q(:3i|:2r|:2s), 2t, 1c\';8.B={};5($.X.S.1z){8.B=$.1x(8.B,$.X.S.1z)}5(8.1z){8.B=$.1x(8.B,8.1z)}8.B=$.1x(8.B,$.X.S.24);5(u.z(\'1l\')){u.11(\'1A.w\')}u.z(\'1l\',E);u.G(\'2u.w\',6(d,e){d.H();x g,B;x h=$(e);5(h.z(\'1l\')){h.11(\'1A.w\')}h.z(\'1l\',E);x i=h.I(\'1e\');5(h.1R(\'N\')&&i&&i.y>0){12(\'1f 1B "1e"-2v\',\'1S "N:1f"\');h.14(\'N\');h.25(\'1e\');5(8.1T){h.z(\'w-N\',i)}J{h.15(\'N:\'+i)}}5(h.1R(\'Y\')&&i&&i.y>0){12(\'3j Y 3k 1B 2w "1e"-2v\',\'1S "Y:3l"\');h.14(\'Y\');h.25(\'1e\');5(8.1T){h.z(\'w-1C\',i)}J{h.15(\'Y:\'+i)}}B=[];g=2x(h);5(8.1T){x j=1m(h,\'B\');5(j.y){B.T(j)}5(1U(h,\'M\')&&h.I(\'M\').y>0){h.z(\'w-M\',h.I(\'M\'));1D(h,\'M\',8);B.T(\'M\')}5(1U(h,\'O\')&&h.I(\'O\').y>0){h.z(\'w-O\',h.I(\'O\'));1D(h,\'O\',8);B.T(\'O\')}5(1m(h,\'N\').y){B.T(\'N\')}5(1m(h,\'1C\').y){B.T(\'Y\')}x k=[\'Y\',\'2y\'];1n(x a=0,l=k.y;a<l;a++){5(1U(h,k[a])){B.T(k[a]);1D(h,k[a],8)}}x m=[\'2z\',\'2A\',\'2B\'];1n(x t=0,l=m.y;t<l;t++){5(2C(h,m[t])){B.T(m[t])}}}x n=h.I(\'1S\');5(n&&n.y){5(h.1R(\'M\')){26(h,\'M\',8);h.z(\'w-M\',g);B.T(\'M\');g=\'\'}x o=\'N:\',1o=n.P(o);5(1o!=-1){x p=n.K(1o).1E(\' \')[0],27=p.K(o.y);5(27.y){h.14(p);h.z(\'w-N\',27);B.T(\'N\')}}5(h.1R(\'O\')){26(h,\'O\',8);h.z(\'w-O\',1V(h,\'1e\'));1D(h,\'1e\',8);B.T(\'O\')}x q=\'Y:\',1o=n.P(q);5(1o!=-1){x r=n.K(1o).1E(\' \')[0],28=r.K(q.y);5(28.y){h.14(r);h.z(\'w-1C\',28);B.T(\'Y\')}}}x n=h.I(\'1S\');5(n&&n.y){B.T(n)}h.z(\'w-B\',B.1W(\' \'));h.z(\'2D-29\',g);h.G(\'1a.w\',6(a){a.H();1F(h);h.15(Q(\'1a\'))}).G(\'1X.w\',6(a){a.H();h.14(Q(\'1a\'));h.11(\'U\',8.U.2a);1Y(h)}).G(\'2E.w\',6(a){a.H();h.11(\'U\',8.U.2F)}).G(\'U.w\',6(a,b){a.H();5(b===A){7}5(D 8.Z.1p==\'6\'){8.Z.1p.R(h[0],u,8.V)}h.z(\'1Z\',\'20\');5(h.C(\':3m\')&&!8.U.2G){7}5(h.C(\':2H\')&&!8.U.2I){7}x c=1q(h.10());1n(x v 1B 8.B){x f=8.B[v];5(1g(h,v)&&D f==\'6\'){5(!f.R(h[0],c)){h.z(\'1Z\',\'3n\');1G}}}5(h.z(\'1Z\')==\'20\'){5(b!==\'1h\'){2b(h,u,8)}}J{5(b!==\'20\'){2J(h,u,8)}}}).G(\'1A.w\',6(a){a.H();h.2K(\'.w\');h.z(\'1l\',A)});5(1r(h)){5(h.10()==\'\'){h.10(h.z(\'w-M\'))}5(1H(h)){h.15(Q(\'1b\'))}5(h.C(\'1c\')){h.2c(\'2d:3o(\'+h.z(\'2L\')+\')\').15(Q(\'1b\'));h.G(\'2e.w\',6(a){a.H();5(1H(h)){h.15(Q(\'1b\'))}J{h.14(Q(\'1b\'))}})}}5(2M(h)){$(\'[1f="\'+h.z(\'w-N\')+\'"]\').G(\'1X.w\',6(a){a.H();1F(h);h.11(\'U.w\',8.U.2a);1Y(h)})}5(1g(h,\'3p\')){x s,1I,$1s;s=h.I(\'3q\');1I=h.I(\'2N\');$1s=$(\'[2N="\'+(3r(1I)+1)+\'"]\');5(h.C(\'1c\')){5(1I){h.G(\'2e.w\',6(a){a.H();5($1s.y){$1s.1a()}})}}J{5(s&&1I){h.G(\'2E.w\',6(a){a.H();5(h.10().y==s){x b=a.3s;2O(b){W 9:W 13:W 16:W 17:W 37:W 38:W 39:W 40:W 46:7 A}5($1s.y){$1s.1a()}h.11(\'1X\')}})}}}5(1g(h,\'2y\')&&!h.C(\':2H\')){h.1a()}});u.G(\'1A.w\',6(a){a.H();u.2K(\'.w\');$(1k,u).11(\'1A.w\');u.z(\'1l\',A)});$(1k,u).1j(6(){u.11(\'2u.w\',$(F))}).3t(\'1c, :1t, :1J\').G(\'2e.w\',6(a){a.H();$(F).11(\'1X.w\')});u.2P=6(){12(\'2Q "2P"\',\'2R 2S "21"\');7 u.22(\'21.w\')};u.G(\'21.w\',6(b){b.H();5(D 8.L.1p==\'6\'){8.L.1p.R(u[0],8.V)}x c=[],2f={};$(1k,u).1j(6(){x a=$(F);1F(a);a.11(\'U.w\',8.U.1u);x v=a.10();1Y(a);5(a.z(\'1Z\')==\'20\'){5(a.C(\':1J\')||a.C(\':1t\')){5(!a.C(\':2T\')){v=\'\'}}5(D v==\'1K\'||v==1i){v=\'\'}5(v.y>0){2f[a.I(\'1f\')]=v}}J{5(8.U.1u!==A){c.T(a)}}});5(c.y>0){5(D 8.2g==\'6\'){12(\'1L 6 "2g"\',\'"L.18"\');8.2g.R(u[0],c,8.V);8.L.18=A}5(D 8.L.18==\'6\'){8.L.18.R(u[0],c,8.V)}7 A}J{$(\'1y:2U\',u).1j(6(){x a=$(F);1F(a)});5(D 8.1u==\'6\'){12(\'1L 6 "1u"\',\'"L.19"\');8.1u.R(u[0],8.V);8.L.19=A}5(D 8.L.19==\'6\'){8.L.19.R(u[0],8.V)}7 2f}});u.2V=6(){12(\'2Q "2V"\',\'2R 2S "23"\');7 u.22(\'23.w\')};u.G(\'23.w\',6(b){b.H();5(D 8.1d==\'6\'){12(\'1L 6 "1d"\',\'"L.1d"\');8.1d.R(u[0],8.V);8.L.1d=A}5(D 8.L.1d==\'6\'){8.L.1d.R(u[0],8.V)}$(1k,u).1j(6(){x a=$(F);5(1r(a)){a.15(Q(\'1b\'));a.10(a.z(\'w-M\'))}J{a.10(a.z(\'2D-29\'))}2b(a,u,8)});7 A});5(u.C(\'L\')){u.I(\'2W\',\'2W\');u.G(\'2r.w\',6(a){a.H();7 u.22(\'21.w\')});u.G(\'2s.w\',6(a){a.H();7 u.22(\'23.w\')})}7 u};$.X.S.2o={\'1T\':E,\'V\':\'2X\',\'1z\':{},\'U\':{\'2a\':E,\'1u\':E,\'2F\':A,\'2G\':A,\'2I\':A},\'Z\':{\'1p\':1i,\'19\':6(){x a=$(F);5(a.C(\':1J\')||a.C(\':1t\')){a.2Y().14(Q(\'1h\'))}a.14(Q(\'1h\'))},\'18\':6(){x a=$(F);5(a.C(\':1J\')||a.C(\':1t\')){a.2Y().15(Q(\'1h\'))}a.15(Q(\'1h\'))}},\'L\':{\'1d\':1i,\'1p\':1i,\'19\':1i,\'18\':6(a,b){2O(b){W\'3u\':1M=\'3v 3w, 3x 2Z 3y 3z 3A 3B.\';1G;W\'3C\':1M=\'3D, 3E 2Z 3F 3G 3H 3I.\';1G;W\'3J\':1M=\'3Kón, 3L 3M 3N 3O 3P 3Q 3R 3S.\';1G;W\'2X\':3T:1M=\'3U, 2q 3V 2w Z 3W 3X 3Y 3Z 41.\';1G}42(1M);a[0].1a()}},\'30\':[\'Y\'],\'31\':[\'O\']};$.X.S.24={\'Y\':6(v){x a=$(F);5(a.C(\':1J\')||a.C(\':1t\')){5(a.C(\':1t\')){x b=1m(a,\'1C\');5(b.y){a=$(\'1y:32(\'+b+\')\')}}J{x c=a.I(\'1f\');5(c&&c.y>0){a=$(\'1y[1f="\'+c+\'"]\')}}5(!a.C(\':2T\')){7 A}}J 5(a.C(\'1c\')){5(1r(a)){5(1H(a)){7 A}}J{5(v.y==0){7 A}}}J{5(v.y==0){7 A}}7 E},\'43\':6(v){7 $.X.S.24.Y.R(F,v)},\'2z\':6(v){v=2h(v);5(v.y==0){7 E}5(44(v)){7 A}7 E},\'2A\':6(v){5(v.y==0){7 E}x r=/^([a-2i-2j-45\\.\\-])+\\@(([a-2i-2j-9\\-])+\\.)+([a-2i-2j-9]{2,4})+$/;7 r.33(v)},\'2B\':6(v){5(v.y==0){7 E}5(v.34(/^47\\./)){v="35://"+v}7 v.34(/^(35\\:\\/\\/|48\\:\\/\\/)(.{4,})$/)},\'O\':6(v){5(v.y==0){7 E}x a=$(F),p=a.z(\'w-O\');5(p.K(0,1)==\'/\'){p=p.K(1)}5(p.K(p.y-1)==\'/\'){p=p.K(0,p.y-1)}7 49 4a(p).33(v)},\'N\':6(v){5(v!=$(\'[1f="\'+$(F).z(\'w-N\')+\'"]\').10()){7 A}7 E}};$.X.S.2p={\'1a\':\'1a\',\'1h\':\'1h\',\'1b\':\'1b\'};6 1r(a){7 1g(a,\'M\')}6 1H(a){5(1q(a.10())==a.z(\'w-M\')){7 E}7 A}6 1F(a){5(1r(a)){5(1H(a)&&!a.C(\'1c\')){a.10(\'\');a.14(Q(\'1b\'))}}}6 1Y(a){5(1r(a)){5(1q(a.10())==\'\'&&!a.C(\'1c\')){a.10(a.z(\'w-M\'));a.15(Q(\'1b\'))}}}6 4b(a){7 1g(a,\'O\')}6 2M(a){7 1g(a,\'N\')}6 2b(a,f,o){5(D o.2k==\'6\'){12(\'1L 6 "2k"\',\'"Z.19"\');o.2k.R(a[0],f,o.V);o.Z.19=A}5(D o.Z.19==\'6\'){o.Z.19.R(a[0],f,o.V)}}6 2J(a,f,o){5(D o.2l==\'6\'){12(\'1L 6 "2l"\',\'"Z.18"\');o.2l.R(a[0],f,o.V);o.Z.18=A}5(D o.Z.18==\'6\'){o.Z.18.R(a[0],f,o.V)}}6 1U(b,a){5(D b.I(a)==\'1K\'){7 A}5(b.I(a)===\'A\'||b.I(a)===A){7 A}7 E}6 2C(a,t){5(a.I(\'1N\')==t){7 E}5(a.C(\'1y[1N="\'+t+\'"]\')){7 E}x b=1O(a);5(b.P(\'1N="\'+t+\'"\')!=-1||b.P(\'1N=\\\'\'+t+\'\\\'\')!=-1||b.P(\'1N=\'+t+\'\')!=-1){7 E}7 A}6 1g(a,v){x b=\' \'+a.z(\'w-B\')+\' \';7 b.P(v)!=-1}6 1m(a,d){x b=a.z(\'w-\'+d);5(D b!=\'2m\'){b=\'\'}7 b}6 1D(b,a,o){5($.36(a,o.31)==-1){b.25(a)}}6 26(a,c,o){5($.36(c,o.30)==-1){a.14(c)}}6 2x(a){x b,1P,1Q,1v;b=1O(a);1P=b.3a();5(a.C(\'1c\')){1Q=0;a.2c(\'> 2d\').1j(6(n){b=1O($(F));1v=b.1E("\'").1W(\'"\').1E(\'"\').1W(\'\');1v=1v.K(0,1v.P(\'>\'));5(1v.P(\'3b=3b\')>-1){1Q=n}});a.z(\'2L\',1Q);7 1V(a.2c(\'> 2d:4c(\'+1Q+\')\'))}J 5(a.C(\'2t\')){b=b.K(b.P(\'>\')+1);b=b.K(0,b.P(\'</2U\'));7 b}J{7 1V(a)}}6 1V(a,b){5(D b==\'1K\'){b=\'29\'}x c=1O(a),1P=c.3a();5(1P.P(b+\'=\')>-1){c=c.K(1P.P(b+\'=\')+(b.y+1));x d=c.K(0,1);5(d==\'"\'||d=="\'"){c=c.K(1);c=c.K(0,c.P(d))}J{c=c.K(0,c.P(\' \'))}7 c}J{7\'\'}}6 1O(a){7 $(\'<3c></3c>\').4d(a.4e()).4f()}6 Q(a){5(D 1w!=\'1K\'&&D 1w[a]!=\'1K\'){7 1w[a]}7 a}6 1q(b){5(b===1i){7\'\'}5(D b==\'3d\'){1n(x a 1B b){b[a]=1q(b[a])}7 b}5(D b!=\'2m\'){7\'\'}5(b.y==0){7\'\'}7 b.3e(/^\\s\\s*/,\'\').3e(/\\s\\s*$/,\'\')}6 2h(b){5(b===1i){7\'\'}5(D b==\'3d\'){1n(x a 1B b){b[a]=2h(b[a])}7 b}5(D b!=\'2m\'){7\'\'}5(b.y==0){7\'\'}b=1q(b);x r=[\' \',\'-\',\'+\',\'(\',\')\',\'/\',\'\\\\\'];1n(x i=0,l=r.y;i<l;i++){b=b.1E(r[i]).1W(\'\')}7 b}6 3f(a){5(2n&&2n.3g){2n.3g(\'S: \'+a)}}6 12(a,b){3f(a+\' C 4g, 4h \'+b+\' 4i.\')}$.4j[\':\'].32=6(a,b,c){5(!a||!c||!c[3]){7 A}x d=1m($(a),\'1C\');5(!d.y){7 A}7 d==c[3]}})(4k);',62,269,'|||||if|function|return|opts||||||||||||||||||||||||vv|var|length|data|false|validations|is|typeof|true|this|bind|stopPropagation|attr|else|substr|form|placeholder|corresponding|pattern|indexOf|vv_get_class|call|validVal|push|validate|language|case|fn|required|fields|val|trigger|deprecated||removeClass|addClass|||onInvalid|onValid|focus|inactive|select|onReset|alt|name|vv_has_validation|invalid|null|each|inputSelector|vv_isValidVal|vv_data_string|for|start|onValidate|vv_trim|vv_is_placeholderfield|next|checkbox|onSubmit|qal|clss|extend|input|customValidations|destroy|in|requiredgroup|vv_removeAttr|split|vv_clear_placeholdervalue|break|vv_has_placeholdervalue|tab|radio|undefined|callback|msg|type|vv_get_outerHtml|lal|num|hasClass|class|supportHtml5|vv_test_html5_attr|vv_get_original_value_from_value|join|blur|vv_restore_placeholdervalue|vv_isValid|valid|submitForm|triggerHandler|resetForm|defaultValidations|removeAttr|vv_removeClass|corresp|requird|value|onBlur|vv_set_valid|find|option|change|data_obj|invalidFormFunc|vv_strip_whitespace|zA|Z0|validFieldFunc|invalidFieldFunc|string|console|defaults|classes|not|submit|reset|textarea|addField|attribute|the|vv_get_original_value|autofocus|number|email|url|vv_test_html5_type|vv_original|keyup|onKeyup|hiddenFields|disabled|disabledFields|vv_set_invalid|unbind|vv_placeholder_option_number|vv_is_correspondingfield|tabindex|switch|submitform|method|custom|event|checked|text|resetform|novalidate|en|parent|alle|keepClasses|keepAttributes|vv_requiredgroup|test|match|http|inArray||||toLowerCase|selected|div|object|replace|debug|log|validval|button|grouping|elements|group|hidden|NOT|eq|autotab|maxlength|parseInt|keyCode|filter|nl|Let|op|niet|velden|zijn|correct|ingevuld|de|Achtung|nicht|Felder|sind|korrekt|ausgefuellt|es|Atenci|no|se|han|completado|todos|los|campos|correctamente|default|Attention|all|have|been|filled|out||correctly|alert|Required|isNaN|9_||www|https|new|RegExp|vv_is_patternfield|nth|append|clone|html|DEPRECATED|use|instead|expr|jQuery'.split('|'),0,{}))