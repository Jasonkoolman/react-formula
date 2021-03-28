import React from "react";

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
    constructor(props: any) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
    }

    render() {
        const { error, errorInfo } = this.state;

        if (!errorInfo) {
            return this.props.children;
        }

        const errorDetails = (
            <details style={{ whiteSpace: "pre-wrap", marginTop: 16 }}>
                {error && error.toString()}
                <br />
                {errorInfo.componentStack}
            </details>
        );

        return (
            <div>
                <h3>Oeps</h3>
                Er is een fout opgetreden tijdens het laden van het
                formulier. Probeer het later opnieuw.
                {process.env.NODE_ENV !== "production" && errorDetails}
            </div>
        );
    }
}

export default ErrorBoundary;
