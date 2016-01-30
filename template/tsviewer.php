<?php
/**
 * We have to force the TSViewer script to load inside an iframe, otherwise it
 * will not load inside the popup window.
 */
if ( isset( $_GET['ts'] ) && $_GET['ts'] ) {
  // 'ts' is set to true -- load TSViewer
  echo '<!DOCTYPE html>
  <html>
    <body>

      <div id="ts3viewer_901891" style="width:; background-color:;"> </div>

      <script type="text/javascript" src="https://static.tsviewer.com/short_expire/js/ts3viewer_loader.js"></script>

      <script type="text/javascript">
      <!--
      var ts3v_url_1 = "https://www.tsviewer.com/ts3viewer.php?ID=901891&text=000000&text_size=12&text_family=1&js=1&text_s_weight=bold&text_s_style=normal&text_s_variant=normal&text_s_decoration=none&text_s_color_h=525284&text_s_weight_h=bold&text_s_style_h=normal&text_s_variant_h=normal&text_s_decoration_h=underline&text_i_weight=normal&text_i_style=normal&text_i_variant=normal&text_i_decoration=none&text_i_color_h=525284&text_i_weight_h=normal&text_i_style_h=normal&text_i_variant_h=normal&text_i_decoration_h=underline&text_c_weight=normal&text_c_style=normal&text_c_variant=normal&text_c_decoration=none&text_c_color_h=525284&text_c_weight_h=normal&text_c_style_h=normal&text_c_variant_h=normal&text_c_decoration_h=underline&text_u_weight=bold&text_u_style=normal&text_u_variant=normal&text_u_decoration=none&text_u_color_h=525284&text_u_weight_h=bold&text_u_style_h=normal&text_u_variant_h=normal&text_u_decoration_h=none";
      ts3v_display.init(ts3v_url_1, 901891, 100);
      -->
      </script>

    </body>
  </html>';
} else {
  // 'ts' is not set -- call this file again inside an iframe with 'ts' set to true
  echo '<div id="ts-popup" class="white-popup">
    <iframe src="'. $_SERVER['PHP_SELF'] .'?ts=true" width="100%" height="400px" style="border:0;"></iframe>
  </div>';
}
