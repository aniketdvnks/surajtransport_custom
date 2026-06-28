// System-wide datatable row click-to-select for all reports
(function () {
	document.addEventListener("click", function (e) {
		var row = e.target.closest(".dt-scrollable .dt-row");
		if (!row) return;

		var scrollable = row.closest(".dt-scrollable");
		scrollable.querySelectorAll(".dt-row--st-selected").forEach(function (r) {
			r.classList.remove("dt-row--st-selected");
		});
		row.classList.add("dt-row--st-selected");
	});
})();
