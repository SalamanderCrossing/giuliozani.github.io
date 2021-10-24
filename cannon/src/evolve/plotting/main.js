fetch("../history.old.json")
	.then((response) => response.json())
	.then((data) => {
		/*
		const xs = new Array(data.length).fill(0).map((_, i) => i);
		const trace1 = {
			x: xs,
			y: data.map((x) => x[0]),
			type: "scatter",
			name: "fitness",
		};

		const trace2 = {
			x: xs,
			y: data.map((x) => x[1][0]),
			xaxis: "x2",
			yaxis: "y2",
			type: "scatter",
			name: "W_s",
		};

		const trace3 = {
			x: xs,
			y: data.map((x) => x[1][1]),
			xaxis: "x3",
			yaxis: "y3",
			type: "scatter",
			name: "W_c",
		};

		const trace4 = {
			x: xs,
			y: data.map((x) => x[1][3]),
			xaxis: "x4",
			yaxis: "y4",
			type: "scatter",
			name: "W_d",
		};

		const data = [trace1, trace2, trace3, trace4];

		var layout = {
			width: "100%",
			height: "600",
			grid: { rows: 4, columns: 1, pattern: "independent" },
		};
		*/
		const rawData = [
			{
				depth: 6,
				data: [
					[1, 8.6],
					[6, 4.3],
					[11, 5.16],
					[16, 5.94],
				],
			},
			{
				depth: 7,
				data: [
					[1, 96.352],
					[6, 29.152599999994038],
					[11, 29.6995],
					[16, 34.02089999999106],
				],
			},
			{
				depth:8,
				data:[
					[1, 419.251200000003]
				]
			}
		];
		const layout = {
			width:600,
			height:400,
			xaxis:{
				title:'number of threads'
			},
			yaxis:{
				title:'computation time (s)',
			}
		};
		Plotly.newPlot(
			"plot1",
			[
				{
					x: rawData[0].data.map((a) => a[0]),
					y: rawData[0].data.map((a) => a[1]),
					type: "scatter",
					name:'depth 6'
				},
				{
					x: rawData[1].data.map((a) => a[0]),
					y: rawData[1].data.map((a) => a[1]),
					type: "scatter",
					name: 'depth 7'
				},
			],
			layout
		);
	});
