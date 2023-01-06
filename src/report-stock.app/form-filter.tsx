import React from "react";

type FilterProps = {
    search: string;
}

export class FormFilter extends React.Component {
    constructor(p: FilterProps) {
        super(p);
    }

    render(): React.ReactNode {
        return (
            <p>Test Reactjs</p>
        );
    }
}