---
# Process with Jekyll.
---
/**
 * canvas.js
 */

/**
 * Add a target attribute to all of the links in the document.
 *
 * TODO: commented out to see if this code is overriding the base tag in the head.
var context = "_top";
{% if page.link_target != null %}
  context = {{ page.link_target }};
  context = "_self";
{% elsif site.link_target != null %}
  context = {{ site.link_target }};
  context = "_blank";
{% endif %}
var links = document.getElementsByTagName("A");

for (i = 0; i < links.length; i++) {
  links[i].target = context;
}
*/


{% if site.checkbox_on_summaries == true %}

  var summaries = document.getElementsByTagName("SUMMARY");

  for (i = 0; i < summaries.length; i++) {
    var span = document.createElement("SPAN");
    span.className = "floats-right";

    var cb = document.createElement("INPUT");
    cb.className = "done";
    cb.type = "checkbox";
    cb.id = cb.name = "summary-" + i;

    span.appendChild(cb);
    summaries[i].appendChild(span);
  }

{% endif %}
