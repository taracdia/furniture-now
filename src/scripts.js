class Furniture {
    constructor(fileName, name, price) {
        this.fileName = fileName;
        this.name = name;
        this.price = price;
    }
}
$(function () {
    let isDealModalTriggered = false;
    let cartNum = 0;
    let isDiscount = false;
    let furnArray = [];

    //dummy variables here
    furnArray.push(new Furniture("img/wicker-furniture.jpg", "Wicker Furniture", "500"));
    furnArray.push(new Furniture("img/chair.jpg", "Chair", "120"));
    furnArray.push(new Furniture("img/lounge-chairs.jpg", "Lounge Chairs", "200"));
    //dummy variables here

    updateCart();

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    function addFurniture(selector, furniture) {
        selector.append("<div class='col col-12 col-xl-5 py-2'><div class='row row-content furniture-card align-items-center'><div class='col col-6'><img src='" + furniture.fileName + "' alt='" + furniture.name + "'></div><div class='col col-4'><p>" + furniture.name + ": $" + furniture.price + "</p></div><div class='col col-2 p-0'><button class='btn btn-lg orangeButton addToCart'>+<i class='fa fa-shopping-cart'></i></button></div></div></div></div>");
    }
    addFurniture($("#tablesChairs"), new Furniture("img/wicker-furniture.jpg", "Wicker Furniture", "500"));
    addFurniture($("#tablesChairs"), new Furniture("img/lounge-chairs.jpg", "Lounge Chairs", "200"));
    addFurniture($("#tablesChairs"), new Furniture("img/zebra-table.jpg", "Zebra Table", "10"));
    addFurniture($("#tablesChairs"), new Furniture("img/boat-table.jpg", "Boat Table", "150"));
    addFurniture($("#tablesChairs"), new Furniture("img/wrought-iron-chair.jpg", "Wrought Iron Chair", "20"));

    addFurniture($("#couches"), new Furniture("img/daybed.jpg", "Daybed", "100"));
    addFurniture($("#couches"), new Furniture("img/sofa.jpg", "Sofa", "150"));

    addFurniture($("#beds"), new Furniture("img/king-bed.jpg", "King Bed", "300"));
    addFurniture($("#beds"), new Furniture("img/queen-bed.jpg", "Queen Bed", "200"));
    addFurniture($("#beds"), new Furniture("img/portable-bed.jpg", "Portable Bed", "50"));
    addFurniture($("#beds"), new Furniture("img/lumbar-support-bed.jpg", "Lumbar Support Bed", "80"));
    addFurniture($("#beds"), new Furniture("img/twin-bed.jpg", "Twin Bed", "100"));


    $(".addToCart").click(function () {
        $("#cartNum").html(++cartNum);
    });

    function triggerDealModal() {
        if (!isDealModalTriggered && $("#dropdownMenuLink").attr('aria-expanded') == "false") {
            $("#dealsModal").modal("show");
            isDealModalTriggered = true;
        }
    }
    $("html").mouseleave(function () {
        triggerDealModal();
    });
    setTimeout(triggerDealModal, 10000);

    $("#signInButton").click(function () {
        //TODO: data validation
        //if data validation works {
        $("#welcomeMessage h6").append($("#loginEmail").val() + "!");
        $("#welcomeMessage").removeClass("d-none");
        $("#loginContainer").hide();
        //} else {
        // $("#loginEmail").val("");
        // $("#loginPass").val("");
        // $("#loginErrorMessage").removeClass("d-none");
        // }
    });
    //TODO: cookies for being signed in
    // if is signed in {
    // $("#addressForm").attr("disabled", "disabled");
    // $("#loggedInMessage").removeClass("d-none");
    // }

    $("#couponButton").click(function () {
        if ($("#inputCoupon").val() == "DEAL") {
            $("#couponErrorMessage").addClass("d-none");
            isDiscount = true;
            $("#couponRow").addClass("d-none");
            updateCart();
        } else {
            $("#couponErrorMessage").removeClass("d-none");
            $("#inputCoupon").val("");
        }
    });
    $("#inputShipping").change(updateCart);

    function updateCart() {
        if (furnArray.length == 0) {
            $("#emptyCartMessage").removeClass("d-none");
            $("#mainContent").addClass("d-none");
            $("#button-row").addClass("d-none");
            return;
        }
        let wholePrice = 0.00;

        $("#cartContainer").empty();
        furnArray.forEach(function (item, index) {
            createCartItem(item, index);
            wholePrice += parseFloat(item.price);
        });
        $(".removeItemButton").click(function () {
            furnArray.splice($(this).attr("data-index"), 1);
            updateCart();
            console.log($(this).attr("data-index"));
        })
        if ($("#inputShipping").val() == "Fast Shipping +$2.00") {
            wholePrice += 2;
            $("#cartShippingCost").text("Shipping cost: +$2.00");
        } else if ($("#inputShipping").val() == "Faster Shipping +$5.00") {
            wholePrice += 5;
            $("#cartShippingCost").text("Shipping cost: +$5.00");
        } else {
            $("#cartShippingCost").text("Shipping cost: +$0.00");
        }
        if (isDiscount) {
            $("#oldPrice").removeClass("d-none");
            $("#discountAppliedMessage").removeClass("d-none");
            $("#oldPrice").text(wholePrice.toFixed(2));
            $("#totalPriceCart").text((wholePrice * .7).toFixed(2));
        } else {
            $("#oldPrice").addClass("d-none");
            $("#discountAppliedMessage").addClass("d-none");
            $("#oldPrice").text("");
            $("#totalPriceCart").text(wholePrice.toFixed(2));
        }
    }

    $("#confirmPurchaseButton").click(function () {
        //TODO: set up data vaidation
        //if no errors {
        $("#mainContent").addClass("d-none");
        $("#button-row").addClass("d-none");
        $("#purchaseThankYou").removeClass("d-none");
        // } else {
        //give feedback
        // }
    });

    function createCartItem(furniture, index) {
        $("#cartContainer").append("<div class='row row-content align-items-center pb-5'><div class='col col-auto'><button class='btn removeItemButton orangeButton' type='button' data-index='" + index + "'>&times;</button></div><div class='col col-4 col-xl-7'><img class='cartImg' src='" + furniture.fileName + "' /></div><div class='col'><p>" + furniture.name + ": $" + furniture.price + "</p></div></div>");
    }
});