declare namespace Jymfony.Contracts.DependencyInjection.Exception {
    /**
     * No entry was found in the container.
     */
    export class NotFoundExceptionInterface extends ExceptionInterface.definition {
        public static readonly definition: Newable<NotFoundExceptionInterface>;
    }
}
