var x = {
	"kind" : "qpxExpress#tripsSearch",
	"trips" : {
		"kind" : "qpxexpress#tripOptions",
		"requestId" : "4nDyGNy6QbIITB2rk0LhEl",
		"data" : {
			"kind" : "qpxexpress#data",
			"airport" : [ {
				"kind" : "qpxexpress#airportData",
				"code" : "AUH",
				"city" : "AUH",
				"name" : "Abu Dhabi International"
			}, {
				"kind" : "qpxexpress#airportData",
				"code" : "CCJ",
				"city" : "CCJ",
				"name" : "Kozhikode International"
			}, {
				"kind" : "qpxexpress#airportData",
				"code" : "DUB",
				"city" : "DUB",
				"name" : "Dublin International"
			}, {
				"kind" : "qpxexpress#airportData",
				"code" : "DXB",
				"city" : "DXB",
				"name" : "Dubai International"
			} ],
			"city" : [ {
				"kind" : "qpxexpress#cityData",
				"code" : "AUH",
				"name" : "Abu Dhabi"
			}, {
				"kind" : "qpxexpress#cityData",
				"code" : "CCJ",
				"name" : "Calicut"
			}, {
				"kind" : "qpxexpress#cityData",
				"code" : "DUB",
				"name" : "Dublin"
			}, {
				"kind" : "qpxexpress#cityData",
				"code" : "DXB",
				"name" : "Dubai"
			} ],
			"aircraft" : [ {
				"kind" : "qpxexpress#aircraftData",
				"code" : "320",
				"name" : "Airbus A320"
			}, {
				"kind" : "qpxexpress#aircraftData",
				"code" : "773",
				"name" : "Boeing 777"
			}, {
				"kind" : "qpxexpress#aircraftData",
				"code" : "77W",
				"name" : "Boeing 777"
			} ],
			"tax" : [ {
				"kind" : "qpxexpress#taxData",
				"id" : "UP_001",
				"name" : "Irish Passenger Charge"
			}, {
				"kind" : "qpxexpress#taxData",
				"id" : "YQ",
				"name" : "EK YQ surcharge"
			} ],
			"carrier" : [ {
				"kind" : "qpxexpress#carrierData",
				"code" : "EK",
				"name" : "Emirates"
			}, {
				"kind" : "qpxexpress#carrierData",
				"code" : "EY",
				"name" : "Etihad Airways"
			} ]
		},
		"tripOption" : [
				{
					"kind" : "qpxexpress#tripOption",
					"saleTotal" : "EUR461.15",
					"id" : "aPXUs9rvE40M7w0lxLeJy6001",
					"slice" : [ {
						"kind" : "qpxexpress#sliceInfo",
						"duration" : 830,
						"segment" : [ {
							"kind" : "qpxexpress#segmentInfo",
							"duration" : 445,
							"flight" : {
								"carrier" : "EY",
								"number" : "42"
							},
							"id" : "GuSC2wkJ72M1fxuZ",
							"cabin" : "COACH",
							"bookingCode" : "Q",
							"bookingCodeCount" : 4,
							"marriedSegmentGroup" : "0",
							"leg" : [ {
								"kind" : "qpxexpress#legInfo",
								"id" : "LZF3lINzMREJDyRC",
								"aircraft" : "77W",
								"arrivalTime" : "2016-03-16T19:45+04:00",
								"departureTime" : "2016-03-16T08:20+00:00",
								"origin" : "DUB",
								"destination" : "AUH",
								"originTerminal" : "2",
								"destinationTerminal" : "3",
								"duration" : 445,
								"mileage" : 3689,
								"meal" : "Meal"
							} ],
							"connectionDuration" : 130
						}, {
							"kind" : "qpxexpress#segmentInfo",
							"duration" : 255,
							"flight" : {
								"carrier" : "EY",
								"number" : "250"
							},
							"id" : "GDPPncMj-tO2qpPT",
							"cabin" : "COACH",
							"bookingCode" : "Q",
							"bookingCodeCount" : 4,
							"marriedSegmentGroup" : "1",
							"leg" : [ {
								"kind" : "qpxexpress#legInfo",
								"id" : "LnCQaf2WtnJImo7X",
								"aircraft" : "320",
								"arrivalTime" : "2016-03-17T03:40+05:30",
								"departureTime" : "2016-03-16T21:55+04:00",
								"origin" : "AUH",
								"destination" : "CCJ",
								"originTerminal" : "1",
								"duration" : 255,
								"mileage" : 1671,
								"meal" : "Meal"
							} ]
						} ]
					} ],
					"pricing" : [ {
						"kind" : "qpxexpress#pricingInfo",
						"fare" : [ {
							"kind" : "qpxexpress#fareInfo",
							"id" : "AdD4FyLYWHQMJZHn+mQS3joH508zTxPaUggPWkfaYoq6",
							"carrier" : "EY",
							"origin" : "DUB",
							"destination" : "CCJ",
							"basisCode" : "QLOWIE"
						} ],
						"segmentPricing" : [
								{
									"kind" : "qpxexpress#segmentPricing",
									"fareId" : "AdD4FyLYWHQMJZHn+mQS3joH508zTxPaUggPWkfaYoq6",
									"segmentId" : "GuSC2wkJ72M1fxuZ",
									"freeBaggageOption" : [ {
										"kind" : "qpxexpress#freeBaggageAllowance",
										"kilos" : 30
									} ]
								},
								{
									"kind" : "qpxexpress#segmentPricing",
									"fareId" : "AdD4FyLYWHQMJZHn+mQS3joH508zTxPaUggPWkfaYoq6",
									"segmentId" : "GDPPncMj-tO2qpPT",
									"freeBaggageOption" : [ {
										"kind" : "qpxexpress#freeBaggageAllowance",
										"kilos" : 30
									} ]
								} ],
						"baseFareTotal" : "EUR302.00",
						"saleFareTotal" : "EUR302.00",
						"saleTaxTotal" : "EUR159.15",
						"saleTotal" : "EUR461.15",
						"passengers" : {
							"kind" : "qpxexpress#passengerCounts",
							"adultCount" : 1
						},
						"tax" : [ {
							"kind" : "qpxexpress#taxInfo",
							"id" : "YQ",
							"chargeType" : "CARRIER_SURCHARGE",
							"code" : "YQ",
							"salePrice" : "EUR148.00"
						}, {
							"kind" : "qpxexpress#taxInfo",
							"id" : "UP_001",
							"chargeType" : "GOVERNMENT",
							"code" : "UP",
							"country" : "IE",
							"salePrice" : "EUR11.15"
						} ],
						"fareCalculation" : "DUB EY X/AUH EY CCJ Q DUBCCJ10.00 333.35QLOWIE NUC 343.35 END ROE 0.878934 FARE EUR 302.00 XT 11.15UP 148.00YQ",
						"latestTicketingTime" : "2015-04-04T23:59-05:00",
						"ptc" : "ADT",
						"refundable" : true
					} ]
				},
				{
					"kind" : "qpxexpress#tripOption",
					"saleTotal" : "EUR490.24",
					"id" : "aPXUs9rvE40M7w0lxLeJy6002",
					"slice" : [ {
						"kind" : "qpxexpress#sliceInfo",
						"duration" : 1070,
						"segment" : [ {
							"kind" : "qpxexpress#segmentInfo",
							"duration" : 450,
							"flight" : {
								"carrier" : "EK",
								"number" : "164"
							},
							"id" : "GwJV4ZoFzf6mz-aQ",
							"cabin" : "COACH",
							"bookingCode" : "M",
							"bookingCodeCount" : 4,
							"marriedSegmentGroup" : "0",
							"leg" : [ {
								"kind" : "qpxexpress#legInfo",
								"id" : "LLLN+QkQpJ4jp+du",
								"aircraft" : "77W",
								"arrivalTime" : "2016-03-17T08:10+04:00",
								"departureTime" : "2016-03-16T20:40+00:00",
								"origin" : "DUB",
								"destination" : "DXB",
								"originTerminal" : "2",
								"destinationTerminal" : "3",
								"duration" : 450,
								"mileage" : 3676,
								"meal" : "Meal"
							} ],
							"connectionDuration" : 395
						}, {
							"kind" : "qpxexpress#segmentInfo",
							"duration" : 225,
							"flight" : {
								"carrier" : "EK",
								"number" : "562"
							},
							"id" : "GhGRAWJd1CHWhgcW",
							"cabin" : "COACH",
							"bookingCode" : "M",
							"bookingCodeCount" : 4,
							"marriedSegmentGroup" : "1",
							"leg" : [ {
								"kind" : "qpxexpress#legInfo",
								"id" : "LpB5-zgPKDavcMOh",
								"aircraft" : "773",
								"arrivalTime" : "2016-03-17T20:00+05:30",
								"departureTime" : "2016-03-17T14:45+04:00",
								"origin" : "DXB",
								"destination" : "CCJ",
								"originTerminal" : "3",
								"duration" : 225,
								"mileage" : 1661,
								"meal" : "Meal"
							} ]
						} ]
					} ],
					"pricing" : [ {
						"kind" : "qpxexpress#pricingInfo",
						"fare" : [ {
							"kind" : "qpxexpress#fareInfo",
							"id" : "AdgxX39avuVq2SWim+hqB0jrmG6hYseHjYLMRSfKcjQg",
							"carrier" : "EK",
							"origin" : "DUB",
							"destination" : "CCJ",
							"basisCode" : "MLXOSIE1"
						} ],
						"segmentPricing" : [
								{
									"kind" : "qpxexpress#segmentPricing",
									"fareId" : "AdgxX39avuVq2SWim+hqB0jrmG6hYseHjYLMRSfKcjQg",
									"segmentId" : "GwJV4ZoFzf6mz-aQ",
									"freeBaggageOption" : [ {
										"kind" : "qpxexpress#freeBaggageAllowance",
										"kilos" : 30
									} ]
								},
								{
									"kind" : "qpxexpress#segmentPricing",
									"fareId" : "AdgxX39avuVq2SWim+hqB0jrmG6hYseHjYLMRSfKcjQg",
									"segmentId" : "GhGRAWJd1CHWhgcW",
									"freeBaggageOption" : [ {
										"kind" : "qpxexpress#freeBaggageAllowance",
										"kilos" : 30
									} ]
								} ],
						"baseFareTotal" : "EUR337.00",
						"saleFareTotal" : "EUR337.00",
						"saleTaxTotal" : "EUR153.24",
						"saleTotal" : "EUR490.24",
						"passengers" : {
							"kind" : "qpxexpress#passengerCounts",
							"adultCount" : 1
						},
						"tax" : [ {
							"kind" : "qpxexpress#taxInfo",
							"id" : "YQ",
							"chargeType" : "CARRIER_SURCHARGE",
							"code" : "YQ",
							"salePrice" : "EUR142.00"
						}, {
							"kind" : "qpxexpress#taxInfo",
							"id" : "UP_001",
							"chargeType" : "GOVERNMENT",
							"code" : "UP",
							"country" : "IE",
							"salePrice" : "EUR11.24"
						} ],
						"fareCalculation" : "DUB EK X/DXB EK CCJ 383.41MLXOSIE1 NUC 383.41 END ROE 0.878934 FARE EUR 337.00 XT 11.24UP 142.00YQ",
						"latestTicketingTime" : "2015-03-08T04:55-05:00",
						"ptc" : "ADT",
						"refundable" : true
					} ]
				} ]
	}
};
