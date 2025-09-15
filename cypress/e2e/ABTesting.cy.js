/// <reference types="cypress" />

import { visit, getCurrentURL } from "../support/actions/BaseActions";
import { getHeaderText } from "../support/actions/ABTestingActions";

describe("A/B Testing Page", () => {
    const URL = "https://the-internet.herokuapp.com/abtest";
    const HEADER_A = "A/B Test Variation 1";
    const HEADER_B = "A/B Test Control";

    beforeEach(() => {
        visit(URL);
        getCurrentURL().should("eq", URL);
    });

    it("verifyHeaderText", () => {
        getHeaderText().then((headerText) => {
        expect([HEADER_A, HEADER_B]).to.include(headerText.trim());
        });
    });
});