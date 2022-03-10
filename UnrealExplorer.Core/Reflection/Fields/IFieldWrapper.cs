namespace UnrealExplorer.Core.Reflection.Fields
{
    //public abstract class WrapperField<InnerT> : Field where InnerT : Field
    // TODO: remove maybe?
    public interface IFieldWrapper
    {
        public Field InnerField { get; }
    }
}