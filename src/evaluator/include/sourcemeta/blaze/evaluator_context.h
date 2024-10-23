#ifndef SOURCEMETA_BLAZE_EVALUATOR_CONTEXT_H
#define SOURCEMETA_BLAZE_EVALUATOR_CONTEXT_H

#ifndef SOURCEMETA_BLAZE_EVALUATOR_EXPORT
#include <sourcemeta/blaze/evaluator_export.h>
#endif

#include <sourcemeta/blaze/evaluator_template.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

#include <cassert>    // assert
#include <cstdint>    // std::uint8_t
#include <functional> // std::reference_wrapper
#include <map>        // std::map
#include <optional>   // std::optional
#include <set>        // std::set
#include <string>     // std::string
#include <vector>     // std::vector

namespace sourcemeta::blaze {

/// @ingroup evaluator
/// Represents a stateful schema evaluation context
class SOURCEMETA_BLAZE_EVALUATOR_EXPORT EvaluationContext {
public:
  /// Prepare the schema evaluation context with a given instance.
  /// Performing evaluation on a context without preparing it with
  /// an instance is undefined behavior.
  auto prepare(const sourcemeta::jsontoolkit::JSON &instance) -> void;

  // All of these methods are considered internal and no
  // client must depend on them
#ifndef DOXYGEN

  ///////////////////////////////////////////////
  // Evaluation stack
  ///////////////////////////////////////////////

  auto evaluate_path() const noexcept
      -> const sourcemeta::jsontoolkit::WeakPointer &;
  auto instance_location() const noexcept
      -> const sourcemeta::jsontoolkit::WeakPointer &;
  auto push(const sourcemeta::jsontoolkit::Pointer &relative_schema_location,
            const sourcemeta::jsontoolkit::Pointer &relative_instance_location,
            const std::size_t &schema_resource, const bool dynamic,
            const bool track) -> void;
  // A performance shortcut for pushing without re-traversing the target
  // if we already know that the destination target will be
  auto push(const sourcemeta::jsontoolkit::Pointer &relative_schema_location,
            const sourcemeta::jsontoolkit::Pointer &relative_instance_location,
            const std::size_t &schema_resource, const bool dynamic,
            const bool track,
            std::reference_wrapper<const sourcemeta::jsontoolkit::JSON>
                &&new_instance) -> void;
  auto pop(const bool dynamic, const bool track) -> void;
  auto
  enter(const sourcemeta::jsontoolkit::WeakPointer::Token::Property &property,
        const bool track) -> void;
  auto enter(const sourcemeta::jsontoolkit::WeakPointer::Token::Index &index,
             const bool track) -> void;
  auto leave(const bool track) -> void;
  auto advance(const sourcemeta::jsontoolkit::Pointer &relative_schema_location)
      -> void;
  auto retreat(const sourcemeta::jsontoolkit::Pointer &relative_schema_location)
      -> void;

private:
  auto push_without_traverse(
      const sourcemeta::jsontoolkit::Pointer &relative_schema_location,
      const sourcemeta::jsontoolkit::Pointer &relative_instance_location,
      const std::size_t &schema_resource, const bool dynamic, const bool track)
      -> void;

public:
  ///////////////////////////////////////////////
  // Target resolution
  ///////////////////////////////////////////////

  auto instances() const noexcept -> const std::vector<
      std::reference_wrapper<const sourcemeta::jsontoolkit::JSON>> &;
  auto
  set_property_target(const sourcemeta::jsontoolkit::JSON::String &property)
      -> void;
  auto unset_property_target() -> void;

  auto resolve_target() -> const sourcemeta::jsontoolkit::JSON &;
  auto resolve_string_target() -> std::optional<
      std::reference_wrapper<const sourcemeta::jsontoolkit::JSON::String>>;

  ///////////////////////////////////////////////
  // References and anchors
  ///////////////////////////////////////////////

  auto hash(const std::size_t &resource,
            const std::string &fragment) const noexcept -> std::size_t;
  auto resources() const noexcept -> const std::vector<std::size_t> &;
  auto mark(const std::size_t id, const Template &children) -> void;
  auto jump(const std::size_t id) const noexcept -> const Template &;
  auto find_dynamic_anchor(const std::string &anchor) const
      -> std::optional<std::size_t>;

  ///////////////////////////////////////////////
  // Evaluation
  ///////////////////////////////////////////////

  auto evaluate() -> void;
  auto evaluate(const sourcemeta::jsontoolkit::WeakPointer::Token::Index from,
                const sourcemeta::jsontoolkit::WeakPointer::Token::Index to)
      -> void;
  auto
  evaluate(const sourcemeta::jsontoolkit::Pointer &relative_instance_location)
      -> void;

private:
  auto is_evaluated(const sourcemeta::jsontoolkit::WeakPointer &pointer) const
      -> bool;

public:
  auto is_evaluated(
      sourcemeta::jsontoolkit::WeakPointer::Token::Property &&property) const
      -> bool;
  auto is_evaluated(
      const sourcemeta::jsontoolkit::WeakPointer::Token::Index index) const
      -> bool;
  auto unevaluate() -> void;

public:
  // TODO: Remove this
  const sourcemeta::jsontoolkit::JSON null{nullptr};

private:
// Exporting symbols that depends on the standard C++ library is considered
// safe.
// https://learn.microsoft.com/en-us/cpp/error-messages/compiler-warnings/compiler-warning-level-2-c4275?view=msvc-170&redirectedfrom=MSDN
#if defined(_MSC_VER)
#pragma warning(disable : 4251 4275)
#endif
  std::vector<std::reference_wrapper<const sourcemeta::jsontoolkit::JSON>>
      instances_;
  sourcemeta::jsontoolkit::WeakPointer evaluate_path_;
  std::uint64_t evaluate_path_size_{0};
  sourcemeta::jsontoolkit::WeakPointer instance_location_;
  std::vector<std::pair<std::size_t, std::size_t>> frame_sizes;
  const std::hash<std::string> hasher_{};
  std::vector<std::size_t> resources_;
  std::map<std::size_t, const std::reference_wrapper<const Template>> labels;
  std::optional<
      std::reference_wrapper<const sourcemeta::jsontoolkit::JSON::String>>
      property_target;

  // TODO: Turn these into a trie
  std::vector<std::pair<sourcemeta::jsontoolkit::WeakPointer,
                        sourcemeta::jsontoolkit::WeakPointer>>
      evaluated_;
  std::vector<sourcemeta::jsontoolkit::WeakPointer> evaluated_blacklist_;
#if defined(_MSC_VER)
#pragma warning(default : 4251 4275)
#endif
#endif
};

} // namespace sourcemeta::blaze

#endif